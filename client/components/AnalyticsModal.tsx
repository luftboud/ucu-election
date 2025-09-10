import { X, Star } from "lucide-react";
import { Representative } from "../data/representatives";

interface CandidateWithPercentage {
  name: string;
  votes: number;
  percentage: number;
  isWinner: boolean;
}

interface AnalyticsModalProps {
  representative: Representative | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AnalyticsModal({
  representative,
  isOpen,
  onClose,
}: AnalyticsModalProps) {
  if (!isOpen || !representative) return null;

  // Calculate total votes from all candidates
  const totalVotes = representative.votingData.candidates.reduce(
    (sum, candidate) => sum + candidate.votes,
    0
  );

  // Process real voting data
  const candidates: CandidateWithPercentage[] =
    representative.votingData.candidates.map((candidate, index) => ({
      name: candidate.name,
      votes: candidate.votes,
      percentage:
        totalVotes === 0
          ? 100
          : Math.round((candidate.votes / totalVotes) * 100),
      isWinner: index === 0, // First candidate in the array is the winner
    }));

  const colors = [
    "#1B2A49",
    "#2E8BC0",
    "#B1D4E0",
    "#C19A6B",
    "#E6C89C",
    "#A9A9A9",
  ]; // Dark blue, black, darker blue variation

  // Simple pie chart calculation
  const createPieChart = () => {
    if (candidates.length === 1 && candidates[0].percentage === 100) {
      return []; // нічого не малюємо
    }
    let currentAngle = 0;
    return candidates.map((candidate, index) => {
      const angle = (candidate.percentage / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      currentAngle += angle;

      const startAngleRad = (startAngle * Math.PI) / 180;
      const endAngleRad = (endAngle * Math.PI) / 180;

      const largeArcFlag = angle > 180 ? 1 : 0;
      const x1 = 100 + 80 * Math.cos(startAngleRad);
      const y1 = 100 + 80 * Math.sin(startAngleRad);
      const x2 = 100 + 80 * Math.cos(endAngleRad);
      const y2 = 100 + 80 * Math.sin(endAngleRad);

      const pathData = [
        `M 100 100`,
        `L ${x1} ${y1}`,
        `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        "Z",
      ].join(" ");

      return {
        path: pathData,
        color: colors[index % colors.length],
      };
    });
  };

  const pieSlices = createPieChart();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-ivory rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-dark-blue text-center flex-1">
            Аналітика
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:px-16 flex flex-col md:flex-row justify-between items-center">
          {/* Representative Info */}
          <div>
            <div className="mx-auto mb-6 flex items-center justify-center">
              <img
                src={representative.photo}
                alt={representative.name}
                className="h-[300px] rounded-lg object-cover"
              />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-black mb-2">
                {representative.name}
              </h3>
              <p className="text-gray-700">
                {representative.specialty}, {representative.course} курс
              </p>
            </div>
          </div>

          {/* Chart and Legend Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-center">
            {/* Pie Chart */}
            {pieSlices.length > 0 && (
              <div className="flex-shrink-0">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  className="drop-shadow-sm"
                >
                  {pieSlices.map((slice, index) => (
                    <path
                      key={index}
                      d={slice.path}
                      fill={slice.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>
            )}
            {/* Legend */}
            <div className="space-y-4 min-w-[250px]">
              <h4 className="text-lg font-semibold text-black mb-4">
                Результати голосування:
              </h4>
              {candidates.map((candidate, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Color dot */}
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  />

                  {/* Winner star icon */}
                  {candidate.isWinner && (
                    <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  )}

                  {/* Candidate info */}
                  <div className="flex-1">
                    <span
                      className={`text-black ${candidate.isWinner ? "font-bold" : "font-medium"}`}
                    >
                      {candidate.name}
                    </span>
                    <span className="text-gray-600 ml-2">
                      ({candidate.percentage}%)
                    </span>
                  </div>
                </div>
              ))}

              {/* Total votes */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Загальна кількість голосів: {totalVotes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

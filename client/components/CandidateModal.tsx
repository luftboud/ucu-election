import { X } from "lucide-react";
import { VotingCandidate } from "../data/candidates.ts";

const specialtyLink = {
  "богослов'я": "https://forms.gle/MgEcTweyRWt1aLnx8",
  "комп'ютерні науки": "https://forms.gle/UvLsE27o2Awz5v6o6",
  "іт та аналітика рішень": "https://forms.gle/HWUD3a8cYJ62fLQe8",
  робототехніка: "https://forms.gle/uG9X2YyVENxJ3Lpi9",
  "соціальна робота": "https://forms.gle/iP5S5GSm4bj3MirN6",
  психологія: "https://forms.gle/BWfmgEHcpecNmjyx6",
  "етика-політика-економіка": "https://forms.gle/Y3JrEnw5YfGdsQCu9",
  соціологія: "https://forms.gle/x2B9cETvYfBbjKSW6",
  історія: "https://forms.gle/1FeQh6tKQSM3ubqg7",
  філологія: "https://forms.gle/kqNLezfhiqvGzVFU8",
  культурологія: "https://forms.gle/Yh7kn6MmxZJSxa8bA",
  право: "https://forms.gle/H86rDagJJVzXtDr4A",
  "право (магістратура)": "https://forms.gle/hmzgCVrg8nArqKZ78",
  журналістика: "https://forms.gle/tREPGKjoeEt8Vbzx7",
  "публічне управління та адміністрування":
    "https://forms.gle/PJvfJ9NzK9wUSi7f7",
  "християнська педагогіка": "https://forms.gle/fAgw3sw7sqLFUmbx9",
  "майбутнє спадщини": "https://forms.gle/849VkLpPwzNE8REUA",
};
const fallbackLink = "#";

interface CandidateModalProps {
  candidate: VotingCandidate | null;
  isOpen: boolean;
  onClose: () => void;
  specialtyId: string;
}

export default function CandidateModal({
  candidate,
  isOpen,
  onClose,
  specialtyId
}: CandidateModalProps) {
  if (!isOpen || !candidate) return null;

  const handleFormSubmit = () => {
    const link = specialtyLink[specialtyId] ?? fallbackLink;
    window.open(link, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-black">{candidate.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Photo placeholder */}
          <div className="mx-auto mb-6 flex items-center justify-center">
            <img
              src={candidate.image}
              alt={candidate.name}
              className="h-[300px] rounded-lg object-cover"
            />
          </div>

          {/* Description */}
          {candidate.shortDescription && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">
                Про кандидата
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {candidate.shortDescription.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          )}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Мотивація кандидата
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {candidate.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          {/* Action button */}
          <div className="text-center">
            <button
              onClick={handleFormSubmit}
              className="bg-dark-blue text-ivory px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Обрати свого кандидата
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

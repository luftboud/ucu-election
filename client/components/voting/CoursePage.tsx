import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import VotingCard from "../VotingCard";

export default function CoursePage() {
  const { facultyId, specialtyId, master } = useParams<{
    facultyId: string;
    specialtyId: string;
    master: string;
  }>();

  function checkIfMaster() {
    if (Number(master)) {
      return [1, 2];
    }
    return [1, 2, 3, 4];
  }

  const courses = checkIfMaster();

  // Properly decode specialty name from URL for display
  const decodedSpecialtyName = specialtyId
    ? decodeURIComponent(specialtyId)
    : "";
  const specialtyName =
    decodedSpecialtyName.charAt(0).toUpperCase() +
    decodedSpecialtyName.slice(1);

  return (
    <div className="min-h-screen bg-ivory px-4 py-10">
      <div className="container mx-auto max-w-6xl">
        {/* Back button */}
        <div className="mb-6">
          <Link
            to={`/voting/faculty/${facultyId}`}
            className="inline-flex items-center text-dark-blue hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад до спеціальностей
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-dark-blue mb-4">
            Виберіть курс
          </h1>
          <p className="text-base text-gray-700 mb-2">
            Спеціальність: {specialtyName}
          </p>
          <p className="text-sm text-gray-600">Оберіть ваш курс навчання</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {courses.map((course) => (
            <VotingCard
              key={course}
              title={`${course} курс`}
              href={`/voting/faculty/${facultyId}/specialty/${specialtyId}/master/${master}/course/${course}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

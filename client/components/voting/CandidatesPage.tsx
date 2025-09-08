import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import VotingCard from "../VotingCard";
import CandidateModal from "../CandidateModal";
import {
  getCandidatesForPosition,
  VotingCandidate,
} from "../../data/candidates.ts";

export default function CandidatesPage() {
  const { facultyId, specialtyId, master, courseId } = useParams<{
    facultyId: string;
    specialtyId: string;
    master: string;
    courseId: string;
  }>();

  const [selectedCandidate, setSelectedCandidate] =
    useState<VotingCandidate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Properly decode specialty name from URL and get candidates from centralized data
  const decodedSpecialtyName = specialtyId
    ? decodeURIComponent(specialtyId)
    : "";
  // Capitalize first letter to match data format
  const specialtyName =
    decodedSpecialtyName.charAt(0).toUpperCase() +
    decodedSpecialtyName.slice(1);
  const course = courseId ? parseInt(courseId) : 1;

  // Get candidates for this specific position
  const candidates = getCandidatesForPosition(
    facultyId || "",
    specialtyName || "",
    course
  );

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

  const handleCandidateClick = (candidate: VotingCandidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCandidate(null);
  };

  const handleFinalSubmit = () => {
    // Placeholder for Google Form link
    const link = specialtyLink[specialtyId] ?? fallbackLink;
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-ivory px-4 py-10">
      <div className="container mx-auto max-w-6xl">
        {/* Back button */}
        <div className="mb-6">
          <Link
            to={`/voting/faculty/${facultyId}/specialty/${specialtyId}/master/${master}`}
            className="inline-flex items-center text-dark-blue hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад до вибору курсу
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-dark-blue mb-4">
            Виберіть кандидата
          </h1>
          <p className="text-base text-gray-700 mb-2">
            {specialtyName}, {courseId} курс
          </p>
          <p className="text-sm text-gray-600">
            Натисніть на картку кандидата для детальної інформації
          </p>
        </div>

        {/* Check if candidates exist for this position */}
        {candidates.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {candidates.map((candidate) => (
                <VotingCard
                  key={candidate.id}
                  title={candidate.name}
                  image={candidate.image}
                  description={candidate.shortDescription || candidate.description}
                  onClick={() => handleCandidateClick(candidate)}
                >
                  {/* <div className="mt-3">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Фото</span>
                    </div>
                  </div> */}
                </VotingCard>
              ))}
            </div>

            {/* Final submit button */}
            <div className="text-center">
              <button
                onClick={handleFinalSubmit}
                className="bg-dark-blue text-ivory px-12 py-4 text-xl font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Обрати свого кандидата
              </button>
            </div>
          </>
        ) : (
          /* No candidates available */
          <div className="text-center py-16">
            <div className="bg-white rounded-lg p-8 shadow-sm max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Кандидати не знайдені
              </h3>
              <p className="text-gray-600 mb-6">
                На даний момент немає кандидатів для цієї позиції.
              </p>
              <Link
                to="/voting"
                className="bg-dark-blue text-ivory px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Повернутися до вибору факультету
              </Link>
            </div>
          </div>
        )}

        {/* Candidate Modal */}
        <CandidateModal
          candidate={selectedCandidate}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          specialtyId={specialtyId}
        />
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import VotingCard from '../VotingCard';
import CandidateModal from '../CandidateModal';

interface Candidate {
  id: string;
  name: string;
  photo?: string;
  description: string;
  shortDescription: string;
}

export default function CandidatesPage() {
  const { facultyId, specialtyId, master, courseId } = useParams<{ 
    facultyId: string; 
    specialtyId: string; 
    master: string;
    courseId: string;
  }>();

  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample candidates data
  const candidates: Candidate[] = [
    {
      id: '1',
      name: 'Анна Петренко',
      shortDescription: 'Активістка студентського самоврядування',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '2',
      name: 'Михайло Коваленко',
      shortDescription: 'Лідер студентських ініціатив',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '3',
      name: 'Софія Іваненко',
      shortDescription: 'Представниця академічних питань',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '4',
      name: 'Олександр Мельник',
      shortDescription: 'Координатор культурних заходів',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  const specialtyLink = {
    "богословя-(бакалаврат)": "https://forms.gle/i3LrNHb4aSbJXp8g6",
    "компютерні-науки": "#",
    "it-%26-da": "#",
    "робототехніка": "#",
    "соціальна-робота": "#",
    "психологія": "#",
    "етика-політика-економіка": "#",
    "соціологія": "#",
    "історія": "#",
    "філологія": "#",
    "культурологія": "#",
    "право": "#",

  };
  const fallbackLink = "#";

  const handleCandidateClick = (candidate: Candidate) => {
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
    window.open(link, '_blank');
  };

  // Decode names for display
  const specialtyName = specialtyId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {candidates.map((candidate) => (
            <VotingCard
              key={candidate.id}
              title={candidate.name}
              description={candidate.shortDescription}
              onClick={() => handleCandidateClick(candidate)}
            >
              <div className="mt-3">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Фото</span>
                </div>
              </div>
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

        {/* Candidate Modal */}
        <CandidateModal
          candidate={selectedCandidate}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}

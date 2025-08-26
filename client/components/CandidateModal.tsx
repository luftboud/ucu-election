import { X } from "lucide-react";
import { VotingCandidate } from "../data/candidates.ts";

interface CandidateModalProps {
  candidate: VotingCandidate | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CandidateModal({
  candidate,
  isOpen,
  onClose,
}: CandidateModalProps) {
  if (!isOpen || !candidate) return null;

  const handleFormSubmit = () => {
    // Placeholder for Google Form link
    window.open("#", "_blank");
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
          <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
            {/* <span className="text-gray-400">Фото кандидата</span> */}
            <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Про кандидата
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {candidate.description}
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

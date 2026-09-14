import { X } from "lucide-react";
import { VotingCandidate } from "../data/candidates.ts";

const specialtyLink: Record<string, string> = {
  "богослов'я": "https://docs.google.com/forms/d/e/1FAIpQLSf60wDso7-R3fYaD9oxEosiRwJsjEABirhV2KAs-gYkhMhd2w/viewform?usp=publish-editor",
  "християнська педагогіка": "https://docs.google.com/forms/d/e/1FAIpQLSfVDijJ-e-rUKM5rcsSrAHT00PZI39aU115ZWqZLs5Tm1lADw/viewform?usp=publish-editor",
  філологія: "https://docs.google.com/forms/d/e/1FAIpQLSe8bITslIH71ipVf7VqHVS6z-71i0NBzW1PI48J8An-7yM0nA/viewform?usp=publish-editor",
  історія: "https://docs.google.com/forms/d/e/1FAIpQLSeObcjvG_ZXGr4Kj9QMIJ1kkGiVvUCCzaEQUUziY7fQiGnZGg/viewform?usp=publish-editor",
  культурологія: "https://docs.google.com/forms/d/e/1FAIpQLSduXbVFchjz68Qwhruj9kGU3_3Aivb1afdU_bRzp0DUP7CvWQ/viewform?usp=publish-editor",
  "майбутнє спадщини": "https://docs.google.com/forms/d/e/1FAIpQLSfKKOWVnUGTstuvoEAvUO8p-uvn9i_wmOlMvVaohhp8lp8vXg/viewform?usp=publish-editor",
  "етика-політика-економіка": "https://docs.google.com/forms/d/e/1FAIpQLSd_5CdJmOtkEXLGuYF13d-uRJkD3tlwkbIjWQHlqs9ZCgWMRQ/viewform?usp=publish-editor",
  соціологія: "https://docs.google.com/forms/d/e/1FAIpQLSf4njxSvBRqp5etSng94H8-csTnonhXGAclDaMWg1BBZGOvRg/viewform?usp=publish-editor",
  "публічне управління та адміністрування": "https://docs.google.com/forms/d/e/1FAIpQLScsflvr63AipSnCav4fIvtvLQnx9VGJKj_DDU2rQltg9uN9eQ/viewform?usp=publish-editor",
  "соціальна робота": "https://docs.google.com/forms/d/e/1FAIpQLSfZXQ5NToUkm__sVJTkGybg50kTpL4246luItXw3mtDgPf6Gg/viewform?usp=publish-editor",
  психологія: "https://docs.google.com/forms/d/e/1FAIpQLSdHdGVNtrJVsJCh7PopnD6DVa2EjV4tOyV1TzSi1iY9CVZpSg/viewform?usp=publish-editor",
  "клінічна психологія (психодинамічна терапія)": "https://docs.google.com/forms/d/e/1FAIpQLScr_6ai1HRW-hjVf0lmotIXVfnN1Ge_Srzaib4qNxhty0lljg/viewform?usp=publish-editor",
  "комп'ютерні науки": "https://docs.google.com/forms/d/e/1FAIpQLSeFQwhl6KYZswYoOgwq2yWgnqGHl6cfriAt5ENm-S4Wh8IpDA/viewform?usp=publish-editor",
  "іт та аналітика рішень": "https://docs.google.com/forms/d/e/1FAIpQLSf9vpCnahycBOy8NWQ4rX4EZyNNqVjr1_5p4X23jOmBaII5Zg/viewform?usp=publish-editor",
  робототехніка: "https://docs.google.com/forms/d/e/1FAIpQLSdydIg7Y9f-dq-ZjWlPzr2MhXq-akwr3g19kMR_e9ClhoJm_w/viewform?usp=publish-editor",
  право: "https://docs.google.com/forms/d/e/1FAIpQLSezS-LnYP7kWxsV8op3suiX0Fs8UhAQNHNYQp1Um4-IyAkepQ/viewform?usp=publish-editor",
  "право (магістратура)": "https://docs.google.com/forms/d/e/1FAIpQLSd1WKzLp3s25Coc-z801CKI6yowqUrXKTlANdi2ZNL3AwjJ8A/viewform?usp=publish-editor",
  "менеджмент маркетингової діяльності": "https://docs.google.com/forms/d/e/1FAIpQLScyjq_ZmsBK0Em7WjxyInBBeTVsm4kBU0t16lTwEq5CAoh_UA/viewform?usp=dialog",
  "управління організаціями які впливають": "https://docs.google.com/forms/d/e/1FAIpQLSeUPt9lWsXE3PXhcyVM6Qu1Ul5RGr1OtxqeAjNuTrbb5VHL_A/viewform?usp=publish-editor",
};
const fallbackLink = "#";

export function getSpecialtyFormLink(specialtyId?: string) {
  if (!specialtyId) return fallbackLink;
  let key = specialtyId;
  try {
    key = decodeURIComponent(specialtyId);
  } catch {
    key = specialtyId;
  }
  return specialtyLink[key] ?? specialtyLink[specialtyId] ?? fallbackLink;
}

interface CandidateModalProps {
  candidate: VotingCandidate | null;
  isOpen: boolean;
  onClose: () => void;
  specialtyId?: string;
}

export default function CandidateModal({
  candidate,
  isOpen,
  onClose,
  specialtyId
}: CandidateModalProps) {
  if (!isOpen || !candidate) return null;

  const handleFormSubmit = () => {
    window.open(getSpecialtyFormLink(specialtyId), "_blank");
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
              referrerPolicy="no-referrer"
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
          {candidate.description && (
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
          )}

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

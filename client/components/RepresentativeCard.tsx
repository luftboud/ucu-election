import { Representative } from '../data/representatives';

interface RepresentativeCardProps {
  representative: Representative;
}

export default function RepresentativeCard({ representative }: RepresentativeCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Photo placeholder */}
      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
        <span className="text-gray-400 text-xs">Фото</span>
      </div>

      {/* Representative info */}
      <div className="text-center">
        <h3 className="text-base font-bold text-black mb-1">
          {representative.name}
        </h3>

        <p className="text-gray-700 text-sm mb-1">
          {representative.specialty}
        </p>

        <p className="text-gray-600 text-xs">
          {representative.course} курс
        </p>
      </div>
    </div>
  );
}

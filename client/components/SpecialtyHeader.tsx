interface SpecialtyHeaderProps {
  specialtyName: string;
}

export default function SpecialtyHeader({
  specialtyName,
}: SpecialtyHeaderProps) {
  return (
    <div className="flex items-center mb-6">
      <div className="flex-1 h-px bg-gray-300"></div>
      <h3 className="px-6 text-xl font-bold text-black text-center">
        {specialtyName}
      </h3>
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
  );
}

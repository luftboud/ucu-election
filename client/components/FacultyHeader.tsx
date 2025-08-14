interface FacultyHeaderProps {
  facultyName: string;
  color?: string;
}

export default function FacultyHeader({ facultyName, color = "text-dark-blue" }: FacultyHeaderProps) {
  return (
    <div className="flex items-center mb-6">
      <div className="flex-1 h-px bg-gray-300"></div>
      <h2 className={`px-6 text-2xl font-bold ${color} text-center`}>
        {facultyName}
      </h2>
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
  );
}

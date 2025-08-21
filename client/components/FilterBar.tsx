interface FilterBarProps {
  faculties: Array<{
    id: string;
    name: string;
  }>;
  selectedFaculty: string;
  onFacultySelect: (facultyId: string) => void;
  facultyColors: Record<string, string>; // напр. { "health": "#148867", "law": "#E63946" }
}

export default function FilterBar({
  faculties,
  selectedFaculty,
  onFacultySelect,
  facultyColors,
}: FilterBarProps) {
  const getButtonClasses = (facultyId: string, isSelected: boolean) => {
    const baseClasses =
      "px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105";

    if (isSelected) {
      return `${baseClasses} text-white shadow-lg`;
    }

    return `${baseClasses} bg-white text-gray-700 hover:bg-gray-100 border border-gray-200`;
  };

  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-3">
        {faculties.map((faculty) => {
          const isSelected = selectedFaculty === faculty.id;
          return (
            <button
              key={faculty.id}
              onClick={() => onFacultySelect(faculty.id)}
              className={getButtonClasses(faculty.id, isSelected)}
              style={
                isSelected ? { backgroundColor: facultyColors[faculty.id] } : {}
              }
            >
              {faculty.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

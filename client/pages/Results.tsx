import { useState, useMemo } from "react";
import {
  electedRepresentatives,
  Representative,
} from "../data/representatives";
import FilterBar from "../components/FilterBar";
import SpecialtyHeader from "../components/SpecialtyHeader";
import RepresentativeCard from "../components/RepresentativeCard";
import AnalyticsModal from "../components/AnalyticsModal";

export default function Results() {
  // Set first faculty as default
  const [selectedFaculty, setSelectedFaculty] = useState<string>(
    electedRepresentatives[0]?.id || "humanities"
  );

  // Modal state
  const [selectedRepresentative, setSelectedRepresentative] =
    useState<Representative | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRepresentativeClick = (representative: Representative) => {
    setSelectedRepresentative(representative);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRepresentative(null);
  };
  // Color mapping for each faculty
  const facultyColors: Record<string, string> = {
    humanities: "#d41e06",
    "health-sciences": "#148867",
    "social-sciences": "#144887",
    "applied-sciences": "#5a027d",
    law: "#bd0413",
    "philosophy-theology": "#660109",
  };
  // Create faculty list for filter bar
  const faculties = electedRepresentatives.map((faculty) => ({
    id: faculty.id,
    name: faculty.name,
  }));

  // Get filtered data based on selected faculty
  const filteredData = useMemo(() => {
    // Show only selected faculty
    const faculty = electedRepresentatives.find(
      (f) => f.id === selectedFaculty
    );
    return faculty ? [faculty] : [];
  }, [selectedFaculty]);

  // Group representatives by specialty for the current view
  const specialtyGroups = useMemo(() => {
    const groups: Record<
      string,
      Array<{
        id: string;
        name: string;
        specialty: string;
        course: number;
        photo?: string;
      }>
    > = {};

    filteredData.forEach((faculty) => {
      faculty.representatives.forEach((rep) => {
        if (!groups[rep.specialty]) {
          groups[rep.specialty] = [];
        }
        groups[rep.specialty].push(rep);
      });
    });

    return groups;
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-ivory px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-dark-blue mb-4">
            Результати виборів
          </h1>
          <p className="text-lg text-gray-700">
            Результати виборів представників студентського самоврядування по
            факультетах
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          faculties={faculties}
          selectedFaculty={selectedFaculty}
          onFacultySelect={setSelectedFaculty}
          facultyColors={facultyColors}
        />

        {/* Specialty Sections */}
        <div className="space-y-10">
          {Object.entries(specialtyGroups).map(
            ([specialty, representatives]) => (
              <section key={specialty}>
                {/* Specialty Header with Line Dividers */}
                <SpecialtyHeader specialtyName={specialty} />

                {/* Representatives Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {representatives.map((representative) => (
                    <RepresentativeCard
                      key={representative.id}
                      representative={representative}
                      onClick={() => handleRepresentativeClick(representative)}
                    />
                  ))}
                </div>
              </section>
            )
          )}
        </div>

        {/* Empty state */}
        {Object.keys(specialtyGroups).length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Не знайдено представників для вибраного факультету
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center mt-10 pt-6 border-t border-gray-300">
          <p className="text-gray-600 text-sm">
            Всі представники обрані демократичним шляхом студентським
            голосуванням
          </p>
        </div>

        {/* Analytics Modal */}
        <AnalyticsModal
          representative={selectedRepresentative}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}

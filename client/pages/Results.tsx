import { electedRepresentatives } from '../data/representatives';
import FacultyHeader from '../components/FacultyHeader';
import RepresentativeCard from '../components/RepresentativeCard';

export default function Results() {
  // Color mapping for each faculty
  const facultyColors: Record<string, string> = {
    'humanities': 'text-[#d41e06]',
    'health-sciences': 'text-[#148867]',
    'social-sciences': 'text-[#144887]',
    'applied-sciences': 'text-[#5a027d]',
    'law': 'text-[#bd0413]',
    'philosophy-theology': 'text-[#660109]'
  };

  return (
    <div className="min-h-screen bg-ivory px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-dark-blue mb-4">
            Результати виборів
          </h1>
          <p className="text-lg text-gray-700">
            Результати виборів представників студентського самоврядування по факультетах
          </p>
        </div>

        {/* Faculty Sections */}
        <div className="space-y-10">
          {electedRepresentatives.map((faculty) => (
            <section key={faculty.id}>
              {/* Faculty Header with Line Dividers */}
              <FacultyHeader
                facultyName={faculty.name}
                color={facultyColors[faculty.id]}
              />

              {/* Representatives Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {faculty.representatives.map((representative) => (
                  <RepresentativeCard
                    key={representative.id}
                    representative={representative}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10 pt-6 border-t border-gray-300">
          <p className="text-gray-600 text-sm">
            Всі представники обрані демократичним шляхом студентським голосуванням
          </p>
        </div>
      </div>
    </div>
  );
}

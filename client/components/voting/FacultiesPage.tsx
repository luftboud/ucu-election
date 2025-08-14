import VotingCard from '../VotingCard';

export default function FacultiesPage() {
  const faculties = [
    {
      id: 'philosophy-theology',
      name: 'Філософсько-Богословський',
      slug: 'philosophy-theology'
    },
    {
      id: 'applied-sciences',
      name: 'Прикладних Наук',
      slug: 'applied-sciences'
    },
    {
      id: 'health-sciences',
      name: 'Наук про Здоров\'я',
      slug: 'health-sciences'
    },
    {
      id: 'social-sciences',
      name: 'Суспільних Наук',
      slug: 'social-sciences'
    },
    {
      id: 'humanities',
      name: 'Гуманітарний',
      slug: 'humanities'
    },
    {
      id: 'law',
      name: 'Факультет Права',
      slug: 'law'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory px-4 py-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-dark-blue mb-4">
            Виберіть ваш факультет
          </h1>
          <p className="text-base text-gray-700">
            Оберіть факультет для продовження процесу голосування
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty) => (
            <VotingCard
              key={faculty.id}
              title={faculty.name}
              href={`/faculty/${faculty.slug}`}
              image="placeholder"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

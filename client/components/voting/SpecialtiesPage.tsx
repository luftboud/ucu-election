import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import VotingCard from '../VotingCard';

export default function SpecialtiesPage() {
  const { facultyId } = useParams<{ facultyId: string }>();

  // Faculty data with specialties
  const facultyData: Record<string, { name: string; specialties: string[] }> = {
    'philosophy-theology': {
      name: 'Філософсько-Богословський',
      specialties: [
        ['Богослов\'я (бакалаврат)', 0],
        ['Християнська педагогіка та організація дозвілля', 1],
        ['Богослов\'я (магістратура)', 1]
      ]
    },
    'applied-sciences': {
      name: 'Прикладних Наук',
      specialties: [
        ['Комп\'ютерні науки', 0],
        ['IT & DA', 0],
        ['Робототехніка', 0],
        ['Науки про дані', 1]
      ]
    },
    'health-sciences': {
      name: 'Наук про Здоров\'я',
      specialties: [
        ['Соціальна робота', 0],
        ['Психологія', 0],
        ['Фізична терапія', 1],
        ['Ерготерапія', 1],
        ['Клінічна психологія (КПТ)', 1],
        ['Клінічна психологія (ОПТ)', 1]
      ]
    },
    'social-sciences': {
      name: 'Суспільних Наук',
      specialties: [
        ['Етика-Політика-Економіка', 0],
        ['Соціологія', 0],
        ['Журналістика', 1],
        ['Медіакомунікації', 1],
        ['Публічне управління та адміністрування', 1],
        ['Управління неприбутковими організаціями', 1]
      ]
    },
    'humanities': {
      name: 'Гуманітарний',
      specialties: [
        ['Історія', 0],
        ['Філологія', 0],
        ['Культурологія', 0],
        ['Майбутнє спадщини: історія, культура, література', 1]
      ]
    },
    'law': {
      name: 'Факультет Права',
      specialties: [
        ['Право', 0]
      ]
    }
  };

  const faculty = facultyData[facultyId || ''];

  if (!faculty) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-blue mb-4">
            Факультет не знайдено
          </h1>
          <Link 
            to="/" 
            className="text-dark-blue hover:underline"
          >
            Повернутися до вибору факультету
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory px-4 py-10">
      <div className="container mx-auto max-w-6xl">
        {/* Back button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-dark-blue hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад до факультетів
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-dark-blue mb-4">
            {faculty.name}
          </h1>
          <p className="text-base text-gray-700">
            Оберіть вашу спеціальність
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.specialties.map((specialty, index) => (
            <VotingCard
              key={index}
              title={specialty[0]}
              href={`/faculty/${facultyId}/specialty/${encodeURIComponent(specialty[0].toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''))}/master/${specialty[1].toString()}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

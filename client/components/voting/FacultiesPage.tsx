import VotingCard from "../VotingCard";

export default function FacultiesPage() {
  const faculties = [
    {
      id: "philosophy-theology",
      name: "Філософсько-Богословський",
      slug: "philosophy-theology",
      img: "images/faculties/philosophy-theology.jpg",
    },
    {
      id: "applied-sciences",
      name: "Прикладних Наук",
      slug: "applied-sciences",
      img: "images/faculties/applied-sciences.jpg",
    },
    {
      id: "health-sciences",
      name: "Наук про Здоров'я",
      slug: "health-sciences",
      img: "images/faculties/health-sciences.jpg",
    },
    {
      id: "social-sciences",
      name: "Суспільних Наук",
      slug: "social-sciences",
      img: "images/faculties/social-sciences.jpg",
    },
    {
      id: "humanities",
      name: "Гуманітарний",
      slug: "humanities",
      img: "images/faculties/humanities.jpg",
    },
    {
      id: "law",
      name: "Факультет Права",
      slug: "law",
      img: "images/faculties/law.jpg",
    },
    {
      id: "business-school",
      name: "Бізнес-школа",
      slug: "business-school",
      img: "images/faculties/business-school.jpg",
    },
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
              href={`/voting/faculty/${faculty.slug}`}
            >
              <img
                src={faculty.img}
                alt=""
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
            </VotingCard>
          ))}
        </div>
      </div>
    </div>
  );
}

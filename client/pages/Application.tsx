export default function Application() {
  const handleApplyClick = () => {
    // Placeholder for Google Form link
    window.open("https://forms.gle/H2o1bjvFe8i7JsBB8", "_blank");
  };

  const infoBlocks = [
    {
      title: "Що таке Рада Студентів?",
      content:
        "Рада студентів УКУ – це вищий представницький орган студентського самоврядування, який відповідає за всі академічні питання студентства. Рада представляє інтереси студентів, захищає їхні права в освітній сфері та співпрацює з адміністрацією, задля вирішення важливих академічних питань.",
      img: "images/scouncil.png",
    },
    {
      title: "Як бути представником?",
      content:
        "Представники академічних груп – це обрані студенти, які представляють інтереси своєї групи в Раді студентів. Вони є посередниками між студентами та викладачами, допомагають доносити думку спільноти, слідкують за академічними питаннями й дбають про комфорт навчального процесу. Представники мають право голосу на засіданнях Ради і є вирішальною ланкою у вирішенні питань, що стосуються студентського життя.",
      img: "images/repr.PNG",
    },
    {
      title: "Хто такі СВК?",
      content:
        "Студентська виборча комісія - це команда тих, хто відповідає за чесність та прозорість виборів у студентській спільноті. Ми організовуємо процес голосування, стежимо за дотриманням правил і гарантуємо рівні можливості для всіх кандидатів і кандидаток . Наша місія - зробити вибори зрозумілими, відкритими та справедливими. Ми працюємо для того, щоб кожен голос мав вплив.",
      img: "images/svk.png",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Section 1: Top section with dark blue background */}
      <section className="bg-dark-blue text-ivory h-screen px-4 flex items-center">
        <div className="container mx-auto text-center">
          {/* before application */}

          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Очікуйте на початок подачі!
          </h1>
          <p className="text-lg text-ivory/80 mb-12 font-medium">
            Початок: четвер, 4 вересня
          </p>
          <img
            className="h-24 mx-auto mb-8"
            src="images/application-ended.webp"
            alt="a cat looking"
          />

          {/* Applications open */}

          {/* <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Триває подача на представників!
          </h1>
          <p className="text-lg text-ivory/80 mb-12 font-medium">
            Кінцевий термін: 8 вересня 23:59
          </p>
          <button
            onClick={handleApplyClick}
            className="bg-ivory text-dark-blue px-10 py-3 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Податись
          </button> */}

          {/* Applications closed */}

          {/* <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Очікуйте на голосування!
          </h1>
          <p className="text-lg text-ivory/80 mb-12 font-medium">
            Початок: середа, 10 вересня
          </p>
          <img
            className="h-24 mx-auto mb-8"
            src="images/application-ended.webp"
            alt="a cat looking" /> */}
        </div>
        {/* Scroll Down Button */}
        <div className="absolute bottom-[11%] left-0 right-0 flex justify-center">
          <button
            onClick={() => {
              const nextSection = document.querySelector(
                "section:nth-of-type(2)"
              );
              nextSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-ivory/70 hover:text-ivory transition-colors duration-300 animate-bounce"
            aria-label="Scroll down"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Section 2: Bottom section with ivory background */}
      <section className="bg-ivory py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {infoBlocks.map((block, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`flex items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                >
                  {/* Icon placeholder */}
                  <div className="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={block.img}
                      alt={block.title}
                      className="w-22 h-24 object-cover"
                    ></img>
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-black mb-3">
                      {block.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {block.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

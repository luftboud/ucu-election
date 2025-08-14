export default function Application() {
  const handleApplyClick = () => {
    // Placeholder for Google Form link
    window.open('#', '_blank');
  };

  const infoBlocks = [
    {
      title: 'Що таке Рада Студентів',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel nunc dignissim, facilisis ligula at, tempor magna. Sed hendrerit consectetur lorem, eu cursus mi volutpat vel.'
    },
    {
      title: 'Обов\'язки представників',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel nunc dignissim, facilisis ligula at, tempor magna. Sed hendrerit consectetur lorem, eu cursus mi volutpat vel.'
    },
    {
      title: 'Переваги бути представником',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel nunc dignissim, facilisis ligula at, tempor magna. Sed hendrerit consectetur lorem, eu cursus mi volutpat vel.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Section 1: Top section with dark blue background */}
      <section className="bg-dark-blue text-ivory py-60 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-16">
            Триває подача на представників!
          </h1>

          <button
            onClick={handleApplyClick}
            className="bg-ivory text-dark-blue px-10 py-3 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Податись
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
                <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Icon placeholder */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400 text-xs">PNG</span>
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

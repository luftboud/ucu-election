export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-ivory">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <p className="text-sm mb-2">
              © {currentYear} Студентська виборча комісія УКУ
            </p>
            <a
              href="https://send.monobank.ua/jar/8TMyF3hSBb"
              className="text-xs text-gray-300"
              target="_blank"
            >
              Сподобалась система голосування? Тоді надішліть кілька гривень,
              щоб купити кавусі для команди
            </a>
          </div>

          <div className="flex space-x-4 items-center">
            {/* СВК Icon Placeholder */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-ivory rounded-lg flex items-center justify-center mb-1">
                <span className="text-dark-blue font-bold text-xs">СВК</span>
              </div>
              <span className="text-xs">СВК</span>
            </div>

            {/* РС УКУ Icon Placeholder */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-ivory rounded-lg flex items-center justify-center mb-1">
                <span className="text-dark-blue font-bold text-xs">РС</span>
              </div>
              <span className="text-xs">РС УКУ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-ivory">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-left w-[70%] md:w-auto">
            <p className="text-sm mb-2">
              © {currentYear} Студентська виборча комісія УКУ
            </p>
            <a
              href="https://send.monobank.ua/jar/8TMyF3hSBb"
              className="text-xs text-gray-300 block"
              target="_blank"
            >
              Сподобалась система голосування? Тоді{" "}
              <b>надішліть кілька гривень,</b> щоб купити кавусі для команди
            </a>
          </div>

          <div className="flex space-y-2 md:space-y-0 md:space-x-4 items-center md:flex-row flex-col">
            <img
              src="images/logo_svk.png"
              alt="logo СВК"
              className="h-6 md:h-10"
            />
            <a
              href="https://www.instagram.com/stcouncilucu?igsh=MWkwYzU3MGRieXhkMw=="
              target="_blank"
            >
              <img
                src="images/logo_scouncil.png"
                alt="logo student council"
                className="h-12 md:h-16"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

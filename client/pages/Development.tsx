export default function Development() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Large heading */}
        <h1 className="text-5xl font-bold text-dark-blue mb-8">Ой...</h1>

        {/* Cat playing with yarn ball SVG illustration */}
        <div className="mb-8 flex justify-center relative">
          <img src="images/cat.webp" alt="a cat" className="h-36" />
          <img
            src="images/qm.webp"
            alt="a question mark"
            className="h-24 animate-tilt z-3 absolute right-6"
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg text-black font-medium">
          Ця сторінка поки недоступна
        </p>
        <p className="text-xs text-black/50 font-medium">
          Очікуйте на відповідний етап!
        </p>
      </div>
    </div>
  );
}

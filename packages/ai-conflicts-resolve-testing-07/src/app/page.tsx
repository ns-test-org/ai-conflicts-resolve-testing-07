export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Hello World
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-yellow-300 mb-8 max-w-2xl mx-auto">
          Welcome to your new landing page. This is where great things begin.
        </p>
        
        {/* CTA Button */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>
    </div>
  );
}




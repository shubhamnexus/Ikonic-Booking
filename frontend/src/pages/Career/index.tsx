import React from 'react';

// Placeholder images for the carousel
const carouselImages = [
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08238.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08326.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08332%20(1).jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08085.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08264.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08212.jpg',
];

const Career: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => {
        const next = prev + 1;
        if (next >= carouselImages.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrent(0);
          }, 1000);
          return carouselImages.length - 1;
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={carouselImages[0]}
          alt="Career Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Career at <span className="text-orange-500">Ikonic</span> Limousine</h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">Luxury in Motion, Excellence in Service</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-24">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            At <span className="text-orange-500 font-semibold">Ikonic Limousine</span>, every journey begins with excellence. Our team is the heart of our service, and our commitment to luxury, professionalism, and seamless experiences defines who we are.<br /><br />
            We believe in cultivating talent that shares our passion for delivering exceptional service. With our people, our partners, and our pursuit of perfection guiding us, we continue to redefine luxury ground transportation in the UAE.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="mb-16 sm:mb-24">
          <div className="w-full flex justify-center overflow-hidden">
            <div className="relative w-full max-w-[1300px] h-[250px] sm:h-[350px]">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${current * (300 + 24)}px)`,
                  width: `${carouselImages.length * (300 + 24)}px`,
                }}
              >
                {[...carouselImages, ...carouselImages.slice(0, 2)].map((src, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[400px] h-[250px] sm:h-[350px] mr-6 sm:mr-12">
                    <img
                      src={src}
                      alt={`Career Slide ${idx + 1}`}
                      className="w-full h-full object-cover object-center bg-white rounded-xl shadow-lg hover:shadow-orange-200 transition-shadow duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Why Join <span className="text-orange-500">Us</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 border-2 border-transparent transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Prestigious Brand</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Be part of a premium limousine service known for elegance, professionalism, and excellence in every journey.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 border-2 border-transparent transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Meaningful Impact</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Every ride you deliver shapes the guest experience. At Ikonic Limousine, your role directly contributes to the comfort, safety, and satisfaction of our valued clients.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 border-2 border-transparent transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Supportive Environment</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Work in a respectful and professional atmosphere where you are equipped with the tools, training, and support to excel every day.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 border-2 border-transparent transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Authentic You</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  At Ikonic Limousine, we value your individuality. Bring your unique strengths and service approach. We believe authenticity enhances luxury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div 
        className="relative min-h-[400px] sm:min-h-[500px] w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08200.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed mb-8 sm:mb-10 font-light">
            Join <span className="text-orange-400">Ikonic Limousine</span> and be part of a team where dedication, elegance, and growth come together. Where your career moves forward with purpose and prestige.
          </p>
          <button className="bg-orange-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 transition-colors duration-300">
            Join our team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career; 
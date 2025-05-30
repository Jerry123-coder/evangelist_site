import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TikTokSection = () => {
  // Settings for the mobile carousel
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          dots: true
        }
      }
    ]
  };
  return (
    <div className="py-10 px-4 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-blue-300 text-xs font-bold mb-1">TIKTOK</h2>
        <h3 className="text-xl md:text-3xl font-bold text-white mb-4">
          Connect with Us on TikTok
        </h3>
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-sm">
          Follow St John the Evangelist Catholic Church on TikTok for inspiring short-form
          content that brings our faith to life.
        </p>

        {/* Mobile Carousel (hidden on desktop) */}
        <div className="md:hidden mb-8 px-4">
          <Slider {...mobileSettings}>
            {[
              '7386954496368233733',
              '7392920389686463749',
              '7386643236988701957'
            ].map((videoId, index) => (
              <div key={index} className="px-2">
                <div className="rounded-lg shadow-md bg-gradient-to-br from-blue-900 via-gray-900 to-black p-[1px] hover:scale-105 transition-transform">
                  <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black">
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${videoId}`}
                      style={{
                        width: '100%',
                        height: '500px',
                        border: 'none',
                        margin: '-1px',
                        background: 'transparent'
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      scrolling="no"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          {[
            '7386954496368233733',
            '7392920389686463749',
            '7386643236988701957'
          ].map((videoId, index) => (
            <div key={index} className="w-full max-w-[300px] mx-auto rounded-lg shadow-md bg-gradient-to-br from-blue-900 via-gray-900 to-black p-[1px] hover:scale-105 transition-transform">
              <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${videoId}`}
                  style={{
                    width: '100%',
                    minHeight: '500px',
                    border: 'none',
                    margin: '-1px',
                    background: 'transparent'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  scrolling="no"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-gray-300 text-xs font-bold mb-2">FOLLOW US</h4>
            <h3 className="text-xl md:text-2xl text-white mb-4 font-bold">
              Join Our TikTok Community
            </h3>
            <a
              href="https://www.tiktok.com/@st.john.the.evang8?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors inline-block"
            >
              FOLLOW
            </a>
          </div>
          <div className="text-sm text-gray-300">
            <p>
              Stay updated with our latest TikTok content! Follow our channel to see
              engaging videos that showcase our vibrant parish community and share
              the beauty of our Catholic faith in creative, bite-sized formats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokSection;

const TikTokSection = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto lg:mt-10 text-center">
        {/* Updated heading for TikTok */}
        <h2 className="text-blue-300 text-sm p-4 font-bold mb-2">TIKTOK</h2>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Connect with Us on TikTok
        </h3>

        <p className="text-gray-300 mb-12 max-w-4xl mx-auto">
          Follow St John the Evangelist Catholic Church on TikTok for inspiring short-form
          content that brings our faith to life. From quick devotional messages to behind-the-scenes
          glimpses of our parish life, our TikTok channel makes the Catholic faith more accessible
          and engaging for all generations.
        </p>

        {/* TikTok Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Parish Life", id: "your-tiktok-id-1" },
            { title: "Youth Activities", id: "your-tiktok-id-2" },
            { title: "Daily Reflection", id: "your-tiktok-id-3" },
            { title: "Church Events", id: "your-tiktok-id-4" },
            { title: "Faith Journey", id: "your-tiktok-id-5" },
            { title: "Community Moments", id: "your-tiktok-id-6" },
          ].map((video, i) => (
            <div key={i} className="aspect-[9/16] w-full max-w-[325px] mx-auto">
              <blockquote 
                className="tiktok-embed w-full h-full" 
                cite={`https://www.tiktok.com/@username/video/${video.id}`}
                data-video-id={video.id}
              >
                <section>
                  <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.tiktok.com/@username/video/${video.id}`}
                  >
                    {video.title}
                  </a>
                </section>
              </blockquote>
              {/* TikTok embed script needs to be loaded for each new video */}
              <script async src="https://www.tiktok.com/embed.js"></script>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 flex justify-center flex-col items-start">
            <h4 className="text-gray-300 lg:text-sm text-xs font-bold">FOLLOW US</h4>
            <h3 className="lg:text-4xl text-2xl text-white pb-8 font-bold">
              Join Our TikTok Community
            </h3>
            <button className="bg-black px-8 py-3 rounded outline-none transition duration-300 ease-in-out font-bold hover:bg-gray-800">
              <a
                href="https://www.tiktok.com/@your-account"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white"
              >
                FOLLOW
              </a>
            </button>
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-left">
              Stay updated with our latest TikTok content! Follow our channel to see
              engaging videos that showcase our vibrant parish community and share
              the beauty of our Catholic faith in creative, bite-sized formats.
              Join our growing community of followers and be part of our digital ministry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokSection;

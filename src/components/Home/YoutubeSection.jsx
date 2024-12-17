const YoutubeSection = () => {
  return (
    // Updated background to match homepage color scheme with gradient
    <div className="py-16 px-4 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto lg:mt-10 text-center">
        {/* Updated text colors for dark background */}
        <h2 className="text-blue-300 text-sm p-4 font-bold mb-2">YOUTUBE</h2>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Stay Connected and Grow in Faith
        </h3>

        <p className="text-gray-300 mb-12 max-w-4xl mx-auto">
          Welcome to St John the Evangelist Catholic Church&apos; YouTube
          channel, your online resource for spiritual nourishment and growth.
          Our channel features a wide array of videos that bring the richness of
          our faith directly to you, wherever you are. From inspiring sermons to
          in-depth teachings, our content is designed to help you deepen your
          understanding of the Catholic faith and grow closer to God.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Monthly Blessings", id: "your-video-id-1" },
            { title: "Bible Study", id: "your-video-id-2" },
            { title: "Novena", id: "your-video-id-3" },
            { title: "Picknick 2024", id: "your-video-id-4" },
            { title: "Novena to Our Lady", id: "your-video-id-5" },
            { title: "Bible Study Ephesians", id: "your-video-id-6" },
          ].map((video, i) => (
            <div key={i} className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 flex justify-center flex-col items-start">
            <h4 className="text-gray-300 lg:text-sm text-xs font-bold">STAY CONNECTED</h4>
            <h3 className="lg:text-4xl text-2xl text-white pb-8 font-bold">
              Subscribe and Stay Updated
            </h3>
            <button className="bg-red-600 px-8 py-3 rounded outline-none transition duration-300 ease-in-out font-bold hover:bg-blue-900">
              <a
                href="https://www.youtube.com/@your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white"
              >
                SUBSCRIBE
              </a>
            </button>
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-left">
              Don&apos;t miss out on any of our new videos! Subscribe to our
              YouTube channel to receive notifications about the latest uploads.
              By subscribing, you ensure that you stay connected with the life
              of our parish and have access to a wealth of spiritual resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;

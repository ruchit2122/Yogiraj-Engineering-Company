
const News = () => {
  const newsArticles = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      category: "ENGINEERING",
      date: "28 OCTOBER 2024",
      title: "The best way to predict the future is to engineer it",
      description:
        "Innovation in engineering drives progress and shapes tomorrow's world",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=center",
      category: "TECHNOLOGY",
      date: "26 DECEMBER 2023",
      title: "Recognizing the need is the primary condition for engineering",
      description:
        "Understanding client requirements is the foundation of successful engineering solutions",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center",
      category: "INNOVATION",
      date: "23 SEPTEMBER 2024",
      title: "Make engineering easy with beautiful infrastructure",
      description:
        "Creating sustainable and efficient engineering solutions for modern challenges",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
      category: "ENGINEERING",
      date: "23 SEPTEMBER 2024",
      title: "Computers are to engineering as tools are to construction",
      description:
        "Technology enhances our engineering capabilities and project delivery",
    },
  ];

  return (
    <section className="font-sans bg-[#f9f9f5] text-zinc-900 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 md:mb-12 space-y-3">
          <span className="inline-flex items-center text-zinc-900 text-xl font-bold tracking-wide font-serif">
            Latest News
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#80D8C3] drop-shadow-lg shadow-[#80D8C3]/80">
            Stay updated with the latest trends
            <h2 className="">and engineering news</h2>
          </h2>
          
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white border hover:border-[#4DA8DA] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Article Content */}
              <div className="p-5 sm:p-6 space-y-2 text-left">
                <div className="text-xs sm:text-sm text-zinc-600 font-medium">
                  {article.category} • {article.date}
                </div>
                <h3 className="text-lg font-semibold text-zinc-800 leading-tight">
                  {article.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

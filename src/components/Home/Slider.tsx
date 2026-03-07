const services = [
  "Bellows Expansion Joints",
  "Dismantling Joints",
  "Strainers",
  "Sight Glass",
  "Telescopic Expansion Joints",
  "Non-Metallic Expansion Joints",
  "Industrial Piping Solutions",
  "Custom Engineering",
  "Quality Testing",
  "On-Site Services",
];

const MarqueeSlider = () => {
  const marqueeItems = [...services, ...services];

  return (
    <div className=" w-full bg-yellow-400 overflow-hidden py-4 md:py-5 border-y border-yellow-400">
      <div className="relative flex">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {marqueeItems.map((item, idx) => (
            <span
              key={`a-${idx}`}
              className="inline-flex items-center gap-3 px-6 md:px-10 text-white  text-sm md:text-base font-medium tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-700 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
        <div
          className="flex whitespace-nowrap absolute top-0 left-0"
          style={{ animation: "marquee2 35s linear infinite" }}
        >
          {marqueeItems.map((item, idx) => (
            <span
              key={`b-${idx}`}
              className="inline-flex items-center gap-3 px-6 md:px-10 text-white text-sm md:text-base font-medium tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeSlider;

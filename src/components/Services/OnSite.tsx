import { Link } from "react-router-dom";

type ServiceImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type OnSiteServiceProps = {
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  images?: ServiceImage[];
  points?: string[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

function OnSiteServiceSection({
  title,
  subtitle,
  tagline,
  description,
  images = [],
  points = [],
  ctaPrimary = { label: "Schedule On-Site Visit", href: "/contact" },
}: OnSiteServiceProps) {
  const media = images.slice(0, 2);

  return (
    <section
      aria-labelledby="onsite-service-heading"
      className="w-full min-h-screen"
    >
      {/* Top Centered Tagline and Title */}
      <div className="w-full flex flex-col items-center justify-center pt-12 pb-4">
        {tagline && (
          <div className="text-center font-bold text-green-600 text-sm md:text-base uppercase tracking-widest mb-2">
            {tagline}
          </div>
        )}
        <h1
          id="onsite-service-heading"
          className="text-center font-bold text-3xl md:text-5xl text-slate-900 mb-2"
        >
          {title}
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            {media.length > 0 && (
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={media[0].src || "/placeholder.svg"}
                  alt={media[0].alt}
                  width={media[0].width || 1080}
                  height={media[0].height || 720}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}
          </div>

          {/* Right Column - All Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Subtitle Section */}
            {subtitle && (
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-8 text-justify">
                {subtitle}
              </p>
            )}

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed font-light text-justify">
                {description}
              </p>

              {/* Elegant Feature Highlight */}
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50/50">
                <p className="text-slate-600 leading-relaxed text-justify">
                  Comprehensive on-location support with expert technicians,
                  specialized tools, and complete maintenance solutions
                  delivered directly to your facility.
                </p>
              </div>
            </div>

            {/* Points List */}
            {points.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-6">
                  On-Site Service Includes
                </h3>
                <div className="space-y-4">
                  {points.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4">
              <div className="flex justify-center">
                <Link
                  to={ctaPrimary.href}
                  className="px-8 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {ctaPrimary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const images: ServiceImage[] = [
    {
      src: "/onsite.avif",
      alt: "Technicians performing maintenance and service work at an industrial manufacturing facility.",
      width: 1080,
      height: 720,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <OnSiteServiceSection
        title="Professional On-Site Service"
        subtitle="Expert technicians deliver comprehensive maintenance and support directly to your location."
        tagline="On-Location Support"
        description="Our On-Site Service brings professional expertise directly to your facility. Our certified technicians arrive equipped with specialized tools, replacement parts, and comprehensive knowledge to perform maintenance, repairs, and system optimization without disrupting your workflow or requiring equipment transportation."
        images={images}
        points={[
          "Scheduled maintenance visits with certified technicians",
          "Complete diagnostic and performance optimization services",
          "On-location repairs with specialized tools and equipment",
          "Preventive maintenance programs tailored to your needs",
          "Real-time consultation and technical recommendations",
          "Detailed service reports and maintenance documentation",
        ]}
      />
    </main>
  );
}

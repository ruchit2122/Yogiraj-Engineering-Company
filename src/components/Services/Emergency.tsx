import { useState } from "react";
import EmergencyFormModal from "../Header/EmergencyFormModal";

type ServiceImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type EmergencyServiceProps = {
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  images?: ServiceImage[];
  points?: string[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

function EmergencyServiceSection({
  title,
  subtitle,
  tagline,
  description,
  images = [],
  points = [],
  ctaPrimary = { label: "Request Emergency Support", href: "/contact" },
}: EmergencyServiceProps) {
  const [showEmergencyForm, setShowEmergencyForm] = useState(false);
  const media = images.slice(0, 2);

  return (
    <section
      aria-labelledby="emergency-service-heading"
      className="w-full min-h-screen"
    >
      {/* Top Centered Tagline and Title */}
      <div className="w-full flex flex-col items-center justify-center pt-12 pb-4">
        {tagline && (
          <div className="text-center font-bold text-red-600 text-sm md:text-base uppercase tracking-widest mb-2">
            {tagline}
          </div>
        )}
        <h1
          id="emergency-service-heading"
          className="text-center font-bold text-3xl md:text-5xl text-slate-900 mb-2"
        >
          {title}
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="order-1 lg:order-1 space-y-8">
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
              <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50/50">
                <p className="text-slate-600 leading-relaxed text-justify">
                  24/7 rapid response team with certified technicians, emergency
                  diagnostics, and immediate on-site support for critical
                  equipment failures.
                </p>
              </div>
            </div>

            {/* Points List */}
            {points.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-6">
                  Emergency Support Includes
                </h3>
                <div className="space-y-4">
                  {points.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setShowEmergencyForm(true)}
                  className="px-8 py-3 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-pulse"
                >
                  {ctaPrimary.label}
                </button>
              </div>
            </div>
            <EmergencyFormModal
              isOpen={showEmergencyForm}
              onClose={() => setShowEmergencyForm(false)}
            />
          </div>

          {/* Right Column - Image */}
          <div className="order-2 lg:order-2">
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
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const images: ServiceImage[] = [
    {
      src: "/emergency.avif",
      alt: "Industrial welder performing emergency repair work with sparks flying on critical equipment.",
      width: 1080,
      height: 720,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <EmergencyServiceSection
        title="Emergency Service Response"
        subtitle="Immediate 24/7 critical support when equipment failures threaten your operations."
        tagline="24/7 Emergency Support"
        description="When critical equipment failures occur, our Emergency Service provides immediate response with certified technicians, advanced diagnostic tools, and rapid repair capabilities. We understand downtime costs and deliver swift, professional solutions to restore your operations with minimal disruption."
        images={images}
        points={[
          "Immediate 24/7 emergency response within 2 hours",
          "Certified technicians with advanced diagnostic equipment",
          "Rapid on-site repair and temporary solutions",
          "Priority parts sourcing and emergency replacement services",
          "Real-time communication and status updates throughout repair",
        ]}
      />
    </main>
  );
}

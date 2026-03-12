import React, { useState } from "react";
import { Link } from "react-router-dom";
import Particles from "./Particles";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";

const TechCorpFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184,0.15)_1px,transparent_0)] [background-size:24px_24px]" />

      {/* Particles background */}
      <div
        style={{
          width: "100%",
          height: "380px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        className="hidden sm:block"
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={120}
          particleSpread={6}
          speed={0.7}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      <div
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-16">
            {/* Company Info - Enhanced */}
            <div className="sm:col-span-2 lg:col-span-1 group text-left">
              <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
                <img
                  src="/logo1.png"
                  alt="Yogiraj Engineering Company"
                  className="h-24 sm:h-28 w-auto object-contain mb-4 sm:mb-6"
                />
                <p className="text-zinc-900 text-sm leading-relaxed mb-6 sm:mb-8 transition-colors duration-300 group-hover:text-zinc-900">
                  Leading manufacturer of industrial expansion joints,
                  strainers, sight glasses, and dismantling joints - delivering
                  precision-engineered solutions from Gujarat, India.
                </p>

                {/* Enhanced Contact Info */}
                <div className="space-y-3">
                  {/* Address */}
                  <div className="flex items-start text-zinc-900 group/contact hover:text-zinc-950 transition-all duration-300 text-left">
                    <div className="p-2 mr-3 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg group-hover/contact:from-slate-200 group-hover/contact:to-slate-100 transition-all duration-300 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-sm leading-relaxed pt-1.5">
                      <span>Plot No. C/2/6, GIDC</span>
                      <br />
                      <span>Vithal Udyognagar - 388121</span>
                      <br />
                      <span>Dist: Anand, Gujarat</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+918511103344"
                    className="flex items-center text-zinc-900 group/contact hover:text-zinc-950 transition-all duration-300 text-left"
                  >
                    <div className="p-2 mr-3 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg group-hover/contact:from-slate-200 group-hover/contact:to-slate-100 transition-all duration-300 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">+91 85111 03344</span>
                  </a>

                  {/* Email */}
                  <div className="flex items-start text-zinc-900 group/contact hover:text-zinc-950 transition-all duration-300 text-left">
                    <div className="p-2 mr-3 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg group-hover/contact:from-slate-200 group-hover/contact:to-slate-100 transition-all duration-300 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-sm leading-relaxed pt-1.5">
                      <a
                        href="mailto:sales@yogirajengg.com"
                        className="hover:underline block"
                      >
                        sales@yogirajengg.com
                      </a>
                      <a
                        href="mailto:salesyec1@gmail.com"
                        className="hover:underline block"
                      >
                        salesyec1@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Sections - Enhanced */}
            {[
              {
                title: "Quick Links",
                links: [
                  { text: "About", to: "/about" },
                  { text: "Products", to: "/products" },
                  { text: "News", to: "/news-gallery" },
                  { text: "Testing", to: "/quality-test-certificate" },
                  { text: "Services", to: "/services" },
                  { text: "Sustainability", to: "/sustainability" },
                  { text: "Case Study", to: "/case-study" },
                ],
              },
              {
                title: "Services",
                links: [
                  { text: "Basic Service", to: "/services#basic" },
                  { text: "On-Site Service", to: "/services#on-site" },
                  {
                    text: "Emergency Service",
                    to: "/services#emergency",
                    special: true,
                  },
                ],
              },
              {
                title: "Resources",
                links: [
                  {
                    text: "Technical Specifications",
                    to: "/quality-test-certificate",
                  },
                  {
                    text: "Quality Certifications",
                    to: "/quality-test-certificate#quality-certifications",
                  },
                  {
                    text: "CAD Drawings",
                    to: "/quality-test-certificate#cad-drawings",
                  },
                  {
                    text: "Installation Guides",
                    to: "/quality-test-certificate#installation-guides",
                  },
                ],
              },
            ].map((section, sectionIndex) => (
              <div key={sectionIndex} className="sm:col-span-1 group/section">
                <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-6 relative text-left">
                    {section.title}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 transition-all duration-500 group-hover/section:w-full" />
                  </h3>
                  <ul className="space-y-3 text-left">
                    {section.links.map((link, linkIndex) => {
                      const isSpecial =
                        typeof link === "object" && link.special;
                      const linkText =
                        typeof link === "string" ? link : link.text;
                      const linkTo =
                        typeof link === "object" && (link as any).to
                          ? (link as any).to
                          : undefined;
                      // Remove underline for all navigation sections
                      return (
                        <li key={linkIndex}>
                          {linkTo ? (
                            <Link
                              to={linkTo}
                              className={`group/link inline-flex items-center text-sm transition-all duration-300 hover:translate-x-1 ${
                                isSpecial
                                  ? "text-red-600 font-semibold hover:text-red-700"
                                  : "text-zinc-900 hover:text-zinc-950"
                              }`}
                            >
                              <span className="relative">{linkText}</span>
                              <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1" />
                            </Link>
                          ) : (
                            <a
                              href="#"
                              className={`group/link inline-flex items-center text-sm transition-all duration-300 hover:translate-x-1 ${
                                isSpecial
                                  ? "text-red-600 font-semibold hover:text-red-700"
                                  : "text-zinc-900 hover:text-zinc-950"
                              }`}
                            >
                              <span className="relative">
                                {linkText}
                                {/* Underline removed from all navigation links */}
                              </span>
                              <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1" />
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}

            {/* Enhanced Newsletter Section */}
            <div className="sm:col-span-2 lg:col-span-1 text-left">
              <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  Stay Updated
                </h3>
                <p className="text-zinc-900 text-sm mb-6">
                  Subscribe to our newsletter for the latest updates and
                  insights.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-sm"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className={`w-full px-6 py-3 text-sm rounded-xl transition-all duration-300 flex items-center justify-center group/button ${
                      isSubscribed
                        ? "bg-green-600 text-white scale-105"
                        : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:scale-105 active:scale-95"
                    }`}
                  >
                    {isSubscribed ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 animate-pulse" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <div className="ml-2 transform transition-transform duration-300 group-hover/button:translate-x-1">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Section */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 text-left">
              <p className="text-zinc-900 text-sm">
                © {new Date().getFullYear()} Yogiraj Engineering Company. All
                rights reserved.
              </p>

              <div className="flex flex-wrap justify-start gap-4 sm:gap-8">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="group/footer text-zinc-900 hover:text-zinc-950 text-sm transition-all duration-300 relative"
                    >
                      {link}
                      {/* Underline removed from footer links */}
                    </a>
                  ),
                )}
              </div>

              <div className="flex items-center text-sm">
                <a
                  href="https://www.jinarthinfotech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-yellow-300 font-bold "
                >
                  Made by Jinarth Infotech
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="hidden md:block absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-xl animate-pulse" />
      <div
        className="hidden md:block absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-pink-100/20 to-orange-100/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </footer>
  );
};

export default TechCorpFooter;

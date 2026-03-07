"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const Map = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const companyLocation = {
    lat: 22.536083819929036,
    lng: 72.92366896762908,
    name: "Yogiraj Engineering Company",
  };

  const googleMapsUrl = `https://www.google.com/maps?q=${companyLocation.lat},${companyLocation.lng}`;

  const contactInfo = [
    {
      icon: <MapPin className="w-[18px] h-[18px]" />,
      label: "Address",
      value: "Plot No. C/2/6, GIDC, Vithal Udyognagar - 388121",
      sub: "Dist: Anand, Gujarat, India",
    },
    {
      icon: <Phone className="w-[18px] h-[18px]" />,
      label: "Phone",
      value: "+91 85111 03344",
      href: "tel:+918511103344",
    },
    {
      icon: <Mail className="w-[18px] h-[18px]" />,
      label: "Email",
      value: "sales@yogirajengg.com",
      href: "mailto:sales@yogirajengg.com",
    },
    {
      icon: <Clock className="w-[18px] h-[18px]" />,
      label: "Hours",
      value: "Mon \u2013 Sat: 9:00 AM \u2013 6:00 PM",
    },
  ];

  return (
    <section className="py-20 bg-gray-50/60 text-left">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
              Find Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Visit Our Facility
            </h2>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Map - takes 3 cols */}
              <div className="lg:col-span-3 relative group">
                <div className="relative h-72 sm:h-80 lg:h-full lg:min-h-[420px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.2154162506561!2d72.92366896762908!3d22.536083819929036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4df4d4e831b3%3A0x636a225eaad7ff80!2sYOGIRAJ%20ENGINEERING%20COMPANY!5e1!3m2!1sen!2sin!4v1756965241426!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  {/* Overlay button */}
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-gray-800 pl-4 pr-3 py-2.5 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 inline-flex items-center gap-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover/btn:text-blue-600 transition-colors" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

              {/* Info - takes 2 cols */}
              <div className="lg:col-span-2 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {companyLocation.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-8">
                    Precision Engineering Solutions
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((item, i) => {
                      const content = (
                        <div className="flex items-start gap-4 group/item">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover/item:bg-blue-50 group-hover/item:text-blue-600 group-hover/item:border-blue-100 transition-all duration-200">
                            {item.icon}
                          </div>
                          <div className="min-w-0 pt-0.5">
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-[15px] font-medium text-gray-900 leading-snug">
                              {item.value}
                            </p>
                            {item.sub && (
                              <p className="text-sm text-gray-500 mt-0.5">
                                {item.sub}
                              </p>
                            )}
                          </div>
                          {item.href && (
                            <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover/item:text-blue-500 flex-shrink-0 mt-1 ml-auto transition-colors" />
                          )}
                        </div>
                      );

                      return item.href ? (
                        <a
                          key={i}
                          href={item.href}
                          className="block hover:no-underline"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={i}>{content}</div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 flex gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors duration-200 inline-flex items-center justify-center gap-2"
                  >
                    Get Directions
                  </a>
                  <a
                    href="tel:+918511103344"
                    className="flex-1 bg-gray-100 text-gray-800 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors duration-200 inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;

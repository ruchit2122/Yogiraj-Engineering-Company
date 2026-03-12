"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  imageUrl: string;
  imageAlt: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: "bvi",
    title: "BVI Certificate",
    issuer: "Bureau Veritas",
    imageUrl: "/Certificate/BVI.jpg",
    imageAlt: "BVI certificate preview",
  },
  {
    id: "ejma",
    title: "EJMA Membership Certificate",
    issuer: "Expansion Joint Manufacturers Association",
    imageUrl: "/Certificate/EJMA.png",
    imageAlt: "EJMA certificate preview",
  },
  {
    id: "iec",
    title: "IEC Certificate",
    issuer: "International Electrotechnical Commission",
    imageUrl: "/Certificate/IEC.jpg",
    imageAlt: "IEC certificate preview",
  },
  {
    id: "zed-msme",
    title: "ZED MSME Certificate",
    issuer: "Ministry of Micro, Small & Medium Enterprises",
    imageUrl: "/Certificate/ZED MSME.jpg",
    imageAlt: "ZED MSME certificate preview",
  },
];

export default function CertificatesPage() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  // Escape closes modal
  useEscape(() => setSelected(null), !!selected);

  return (
    <main className="font-sans bg-background text-foreground">
      <header>
        <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li aria-current="page" className="text-slate-800">
                Certificates
              </li>
            </ol>
          </nav>

          <div className="mt-4 animate-in slide-in-from-bottom-2 fade-in-50">
            <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
              Certificates & Compliance
            </h1>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              Verified standards and quality compliance for our engineering
              services.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-6 md:py-8">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <li
              key={c.id}
              className="animate-in fade-in-0 slide-in-from-bottom-2"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <CertificateCard cert={c} onOpen={() => setSelected(c)} />
            </li>
          ))}
        </ul>
      </section>

      {/* Modal Viewer */}
      {selected && (
        <CertificateModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}

// UI primitives (single-file)

function CertificateCard({
  cert,
  onOpen,
}: {
  cert: Certificate;
  onOpen: () => void;
}) {
  return (
    <article
      className="group relative h-full transform-gpu cursor-pointer rounded-xl border ring-1 ring-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-blue-200 focus-within:ring-2 focus-within:ring-blue-600"
      role="article"
      aria-labelledby={`${cert.id}-title`}
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      style={{ viewTransitionName: cert.id }}
    >
      <div className="overflow-hidden rounded-xl bg-white p-2">
        <img
          src={cert.imageUrl}
          alt={cert.imageAlt}
          className="w-full rounded-lg object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="px-4 pb-4 pt-2 text-center">
        <h3 id={`${cert.id}-title`} className="text-sm font-semibold">
          {cert.title}
        </h3>
      </div>
    </article>
  );
}

function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certificate;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close viewer"
      >
        <XIcon className="size-6" />
      </button>
      <div
        className="relative z-10 flex h-[95vh] w-[95vw] items-center justify-center will-change-auto"
        onClick={onClose}
        style={{ isolation: "isolate" }}
      >
        <img
          src={cert.imageUrl}
          alt={cert.imageAlt}
          className="max-h-full max-w-full object-contain drop-shadow-2xl"
          style={{ imageRendering: "auto", transform: "translateZ(0)" }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

// Hooks
function useEscape(onEscape: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onEscape, enabled]);
}

// Icons (inline SVG)
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

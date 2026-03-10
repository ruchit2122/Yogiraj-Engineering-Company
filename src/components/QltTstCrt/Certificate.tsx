"use client";

import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type Category = "Quality" | "Safety" | "Environment" | "Compliance";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: number;
  category: Category;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  fileUrl: string;
  verified: boolean;
};

const CERTIFICATES: Certificate[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Quality Management",
    issuer: "International Organization for Standardization",
    year: 2024,
    category: "Quality",
    tags: ["Quality Management", "QMS", "Continuous Improvement"],
    imageUrl: "https://placehold.co/360x200?text=ISO+9001",
    imageAlt: "ISO 9001 certificate preview",
    fileUrl: "/certificates/iso-9001.pdf",
    verified: true,
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015 Environmental Management",
    issuer: "International Organization for Standardization",
    year: 2023,
    category: "Environment",
    tags: ["Environmental", "Sustainability", "EMS"],
    imageUrl: "https://placehold.co/360x200?text=ISO+14001",
    imageAlt: "ISO 14001 certificate preview",
    fileUrl: "/certificates/iso-14001.pdf",
    verified: true,
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018 Occupational Health & Safety",
    issuer: "International Organization for Standardization",
    year: 2024,
    category: "Safety",
    tags: ["OH&S", "Risk Management", "Workplace Safety"],
    imageUrl: "https://placehold.co/360x200?text=ISO+45001",
    imageAlt: "ISO 45001 certificate preview",
    fileUrl: "/certificates/iso-45001.pdf",
    verified: true,
  },
  {
    id: "asme",
    title: "ASME Compliance Certificate",
    issuer: "American Society of Mechanical Engineers",
    year: 2022,
    category: "Compliance",
    tags: ["ASME", "Mechanical", "Standards"],
    imageUrl: "https://placehold.co/360x200?text=ASME",
    imageAlt: "ASME certificate preview",
    fileUrl: "/certificates/asme.pdf",
    verified: true,
  },
  {
    id: "ce",
    title: "CE Marking Declaration",
    issuer: "European Conformity",
    year: 2023,
    category: "Compliance",
    tags: ["CE", "Conformity", "EU Standards"],
    imageUrl: "https://placehold.co/360x200?text=CE+Marking",
    imageAlt: "CE marking declaration preview",
    fileUrl: "/certificates/ce.pdf",
    verified: true,
  },
  {
    id: "api-q1",
    title: "API Spec Q1 Certification",
    issuer: "American Petroleum Institute",
    year: 2021,
    category: "Quality",
    tags: ["API", "Oil & Gas", "Specification Q1"],
    imageUrl: "https://placehold.co/360x200?text=API+Q1",
    imageAlt: "API Spec Q1 certificate preview",
    fileUrl: "/certificates/api-q1.pdf",
    verified: false,
  },
];

type SortKey = "newest" | "title-asc";

export default function CertificatesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"" | Category>("");
  const [year, setYear] = useState<number | "">("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [selected, setSelected] = useState<Certificate | null>(null);

  // Distinct years (desc)
  const years = useMemo(() => {
    return Array.from(new Set(CERTIFICATES.map((c) => c.year))).sort(
      (a, b) => b - a,
    );
  }, []);

  const filtered = useMemo(() => {
    let list = CERTIFICATES.slice();

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    if (category) list = list.filter((c) => c.category === category);
    if (year) list = list.filter((c) => c.year === year);

    if (sort === "newest") {
      list.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
    } else if (sort === "title-asc") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [query, category, year, sort]);

  // Simple stats for quick overview
  const stats = useMemo(() => {
    return {
      total: CERTIFICATES.length,
      quality: CERTIFICATES.filter((c) => c.category === "Quality").length,
      safety: CERTIFICATES.filter((c) => c.category === "Safety").length,
      environment: CERTIFICATES.filter((c) => c.category === "Environment")
        .length,
      compliance: CERTIFICATES.filter((c) => c.category === "Compliance")
        .length,
    };
  }, []);

  // Escape closes modal
  useEscape(() => setSelected(null), !!selected);

  return (
    <main className="font-sans bg-background text-foreground">
      <header>
        <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li aria-current="page" className="text-slate-800">
                Certificates
              </li>
            </ol>
          </nav>

          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="animate-in slide-in-from-bottom-2 fade-in-50">
              <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
                Certificates & Compliance
              </h1>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Verified standards and quality compliance for our engineering
                services.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 animate-in fade-in-50 slide-in-from-right-2">
              <Badge tone="brand">{stats.total} total</Badge>
              <Badge tone="neutral">Quality {stats.quality}</Badge>
              <Badge tone="neutral">Safety {stats.safety}</Badge>
              <Badge tone="neutral">Environment {stats.environment}</Badge>
              <Badge tone="neutral">Compliance {stats.compliance}</Badge>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-6 md:py-8">
        {/* Controls */}
        <div className="rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-shadow md:p-5 hover:shadow-md">
          <div className="grid gap-4 md:grid-cols-4 md:gap-5">
            <div className="md:col-span-2">
              <label htmlFor="search" className="sr-only">
                Search certificates
              </label>
              <div className="group flex items-center gap-2 rounded-md border px-3 py-2 transition-shadow focus-within:ring-2 focus-within:ring-blue-600 hover:shadow-sm focus-within:shadow-md">
                <SearchIcon className="size-4 text-slate-500 transition-transform duration-200 group-focus-within:rotate-12" />
                <input
                  id="search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title, issuer, or tag"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                  aria-label="Search certificates"
                />
              </div>
            </div>

            <div className="animate-in fade-in-50 slide-in-from-bottom-1">
              <label htmlFor="category" className="sr-only">
                Filter by category
              </label>
              <select
                id="category"
                className="w-full rounded-md border bg-white px-3 py-2 text-sm transition-shadow hover:shadow-xs focus:ring-2 focus:ring-blue-600"
                value={category}
                onChange={(e) =>
                  setCategory((e.target.value || "") as Category | "")
                }
                aria-label="Filter by category"
              >
                <option value="">All categories</option>
                <option value="Quality">Quality</option>
                <option value="Safety">Safety</option>
                <option value="Environment">Environment</option>
                <option value="Compliance">Compliance</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="animate-in fade-in-50 slide-in-from-bottom-1">
                <label htmlFor="year" className="sr-only">
                  Filter by year
                </label>
                <select
                  id="year"
                  className="w-full rounded-md border bg-white px-3 py-2 text-sm transition-shadow hover:shadow-xs focus:ring-2 focus:ring-blue-600"
                  value={year}
                  onChange={(e) =>
                    setYear(e.target.value ? Number(e.target.value) : "")
                  }
                  aria-label="Filter by year"
                >
                  <option value="">All years</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <div className="animate-in fade-in-50 slide-in-from-bottom-1">
                <label htmlFor="sort" className="sr-only">
                  Sort certificates
                </label>
                <select
                  id="sort"
                  className="w-full rounded-md border bg-white px-3 py-2 text-sm transition-shadow hover:shadow-xs focus:ring-2 focus:ring-blue-600"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  aria-label="Sort certificates"
                >
                  <option value="newest">Newest</option>
                  <option value="title-asc">Title A–Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-6">
          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c, i) => (
                <li
                  key={c.id}
                  className="animate-in fade-in-0 slide-in-from-bottom-2"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <CertificateCard cert={c} onOpen={() => setSelected(c)} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Modal Viewer */}
      {selected && (
        <CertificateModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}

// UI primitives (single-file)

function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "brand" | "neutral";
}) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-transform duration-200 hover:-translate-y-0.5";
  const styles =
    tone === "brand"
      ? "bg-blue-50 text-blue-700"
      : "bg-slate-100 text-slate-700";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-700 transition-colors duration-200 hover:bg-slate-100">
      {children}
    </span>
  );
}

function Button({
  children,
  variant = "primary",
  onClick,
  href,
  download,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  href?: string;
  download?: boolean;
  "aria-label"?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:opacity-50 active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md"
      : "bg-white text-slate-900 hover:bg-slate-50 border shadow-xs hover:shadow-sm";
  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={`${base} ${styles}`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${base} ${styles}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

function CertificateCard({
  cert,
  onOpen,
}: {
  cert: Certificate;
  onOpen: () => void;
}) {
  return (
    <article
      className="group relative h-full transform-gpu rounded-xl border ring-1 ring-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-blue-200 focus-within:ring-2 focus-within:ring-blue-600"
      role="article"
      aria-labelledby={`${cert.id}-title`}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      style={{ viewTransitionName: cert.id }}
    >
      <div className="h-44 overflow-hidden rounded-t-xl border-b bg-white">
        <img
          src={
            cert.imageUrl ||
            "/placeholder.svg?height=200&width=360&query=certificate%20preview"
          }
          alt={cert.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:saturate-110 group-hover:contrast-105"
          width={360}
          height={200}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 id={`${cert.id}-title`} className="text-sm font-semibold">
              {cert.title}
            </h3>
            <p className="mt-1 text-xs text-slate-600">{cert.issuer}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Badge tone="neutral">{cert.year}</Badge>
            {cert.verified && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <CheckCircleIcon className="size-4" />
                Verified
              </span>
            )}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {cert.tags.slice(0, 3).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Button
            variant="primary"
            onClick={onOpen}
            aria-label={`View ${cert.title}`}
          >
            <EyeIcon className="size-4" />
            View
          </Button>
          <Button
            href={cert.fileUrl}
            download
            aria-label={`Download ${cert.title}`}
            variant="ghost"
          >
            <DownloadIcon className="size-4" />
            Download
          </Button>
        </div>
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
      aria-labelledby="certificate-modal-title"
      aria-describedby="certificate-modal-desc"
    >
      <div
        className="absolute inset-0 bg-black/60 animate-in fade-in-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-4xl rounded-xl border bg-white shadow-2xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div>
            <h2
              id="certificate-modal-title"
              className="text-balance text-base font-semibold md:text-lg"
            >
              {cert.title}
            </h2>
            <p
              id="certificate-modal-desc"
              className="mt-0.5 text-xs text-slate-600"
            >
              {cert.issuer} • {cert.year} • {cert.category}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              href={cert.fileUrl}
              download
              aria-label={`Download ${cert.title}`}
              variant="ghost"
            >
              <DownloadIcon className="size-4" />
              Download
            </Button>
            <button
              ref={closeRef}
              onClick={onClose}
              className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Close viewer"
            >
              <XIcon className="size-5" />
            </button>
          </div>
        </div>
        <div className="max-h-[80vh] overflow-auto p-4">
          <div className="rounded-lg border bg-white">
            <img
              src={
                cert.imageUrl ||
                "/placeholder.svg?height=800&width=1200&query=certificate%20document%20preview" ||
                "/placeholder.svg" ||
                "/placeholder.svg"
              }
              alt={cert.imageAlt}
              className="h-auto w-full rounded-lg object-contain transition-transform duration-300"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border bg-white p-8 text-center">
      <FolderIcon className="size-10 text-slate-400" />
      <p className="mt-3 text-sm text-slate-700">
        No certificates match your filters.
      </p>
      <p className="text-xs text-slate-500">
        Try clearing the search or changing filters.
      </p>
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
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4M4 21h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
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
function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m8 12 2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

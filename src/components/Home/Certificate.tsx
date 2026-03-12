const Certificate = () => {
  return (
    <section className="relative bg-[#f9f9f5] py-10 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Trust & Quality
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Certifications & Memberships
          </h2>
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </div>

        {/* Logos Row - Company & EJMA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-16">
          {/* Company Logo */}
          <div className="group flex flex-col items-center">
            <img
              src="/logo1.png"
              alt="Yogiraj Engineering Company Logo"
              className="w-48 h-48 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="mt-3 text-zinc-900 text-sm font-medium tracking-wide">
              Yogiraj Engineering Co.
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-28 bg-gradient-to-b from-transparent via-zinc-300 to-transparent" />
          <div className="sm:hidden w-28 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

          {/* EJMA Logo */}
          <div className="group flex flex-col items-center">
            <img
              src="/Certificate/EJMA.png"
              alt="EJMA - Expansion Joint Manufacturers Association"
              className="w-48 h-48 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="mt-3 text-zinc-900 text-sm font-medium tracking-wide">
              EJMA Member
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;

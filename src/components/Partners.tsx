export default function Partners() {
  const partners = ["NEXORA", "ORBIX", "VELTIX", "LUMINA", "QUANTUM"];

  return (
    <section className="px-8 py-16 border-t border-white/5">
      <div className="container mx-auto">
        <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold text-center mb-10">
          CONFIADA POR EMPRESAS LÍDERES MUNDIAIS
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
          {partners.map((partner) => (
            <div key={partner} className="flex items-center gap-2 group cursor-default">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors">
                <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-accent-cyan transition-colors" />
              </div>
              <span className="text-base font-light tracking-[0.2em] text-white/30 group-hover:text-white/70 transition-all uppercase">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

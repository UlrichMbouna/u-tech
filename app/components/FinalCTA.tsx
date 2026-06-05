const WHATSAPP_URL = "https://wa.me/message/HSGYTYPVLT6EP1";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-primary-container overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-gutter text-center reveal">
        <h2 className="font-display-xl text-display-xl lg:text-display-xl-desktop text-white mb-8">
          Prêt à transformer votre vision ?
        </h2>
        <p className="text-xl text-on-surface-variant mb-12">
          Ne laissez pas vos idées au stade de concept. Donnez-leur
          l&apos;ingénierie qu&apos;elles méritent.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            className="bg-secondary text-white font-black px-10 py-5 rounded-xl text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,98,0,0.5)] transition-all flex items-center gap-3 group"
            href={WHATSAPP_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Contactez-nous
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              send
            </span>
          </a>
          <div className="flex flex-col items-center">
            <p className="text-white font-bold text-xl">+237 697 84 77 90</p>
            <p className="text-on-surface-variant text-sm uppercase tracking-widest">
              Appel ou WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

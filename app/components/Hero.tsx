import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/message/HSGYTYPVLT6EP1";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-primary-container">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-magenta/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="inline-block font-label-sm text-label-sm text-secondary tracking-[0.2em] mb-6 uppercase">
              Innovation Engineering
            </span>
            <h1 className="font-display-xl text-display-xl lg:text-display-xl-desktop text-white mb-8">
              Nous concevons des expériences{" "}
              <span className="text-secondary">digitales</span> qui font décoller
              votre business
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Ulrich-TECH transforme vos idées en solutions numériques innovantes,
              performantes et centrées sur l&apos;utilisateur. Expertise technique
              sans compromis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="bg-secondary text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,98,0,0.4)] transition-all"
                href={WHATSAPP_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Démarrer un projet
                <span className="material-symbols-outlined">rocket_launch</span>
              </a>
              <Link
                className="border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/5 transition-all"
                href="/services"
              >
                Voir nos services
              </Link>
            </div>
          </div>

          <div className="reveal animation-delay-2000 relative">
            <div className="relative z-20 glass-card rounded-2xl p-4 overflow-hidden group">
              <img
                className="rounded-xl w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                alt="Interface logicielle premium affichée sur un ordinateur portable moderne."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMm70SFc6gO-NnshjV4SkqymYkhIEuUdu_CszMr9a8P1vCK-juYua-O5mNDbeHUef37uGGcmCGs5c8npJKX8jGgw1sKXDpXsz7m3xH5iy_Ts3eoxYeI31OxP97xushmfd8YY3ltPdvPgERgEIXU0Jyymm6O174nuXEG04uLO7Ih-D2JLZJ8gASWixrFEMFkShyh5tPxGOK-JA4FBpbe_4PyQR5W7l1NoilpIFGFwz-x-jGBJp4EWqX9694HCpunPrBxl4SvoQZDI8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div>
                  <p className="text-secondary font-bold text-sm mb-1 uppercase tracking-wider">
                    Interface Design
                  </p>
                  <p className="text-white text-xl font-bold">
                    Systèmes Scalables &amp; Intuitifs
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract Floating Element */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-brand-cyan to-secondary rounded-full opacity-20 blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs font-label-sm uppercase tracking-widest">Scroll</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Liquid Transition */}
      <div className="relative -mt-1 h-24 bg-primary-container">
        <svg
          className="w-full h-full fill-surface"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </>
  );
}

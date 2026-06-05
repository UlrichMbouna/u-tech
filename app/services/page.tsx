import Link from "next/link";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import RevealOnScroll from "../components/RevealOnScroll";

const WHATSAPP_URL = "https://wa.me/message/HSGYTYPVLT6EP1";

const services = [
  {
    icon: "language",
    title: "Sites Web & Landing Pages",
    description:
      "Conception de plateformes performantes alliant ergonomie et rapidité pour convertir vos visiteurs en clients fidèles.",
    features: ["Design Responsive", "Performance Optimisée"],
    cardClass: "border-t-secondary",
    iconClass: "bg-secondary/10 text-secondary",
    textClass: "text-secondary",
    delay: "0ms",
  },
  {
    icon: "shopping_bag",
    title: "E-commerce & Boutiques",
    description:
      "Solutions transactionnelles sécurisées et évolutives pour maximiser vos ventes en ligne 24h/24 et 7j/7.",
    features: ["Paiements Sécurisés", "Gestion de Stock"],
    cardClass: "border-t-primary",
    iconClass: "bg-primary/10 text-primary",
    textClass: "text-primary",
    delay: "100ms",
  },
  {
    icon: "auto_fix_high",
    title: "Refonte & Optimisation",
    description:
      "Modernisation de vos infrastructures existantes pour une meilleure expérience utilisateur et une sécurité accrue.",
    features: ["Audit Technique", "UX/UI Modernisation"],
    cardClass: "border-t-brand-emerald",
    iconClass: "bg-brand-emerald/10 text-brand-emerald",
    textClass: "text-brand-emerald",
    delay: "200ms",
  },
  {
    icon: "search_insights",
    title: "SEO & Référencement",
    description:
      "Stratégies de visibilité organique pour dominer les résultats de recherche et attirer un trafic qualifié.",
    features: ["Analyse de Mots Clés", "Netlinking Qualitatif"],
    cardClass: "border-t-brand-magenta",
    iconClass: "bg-brand-magenta/10 text-brand-magenta",
    textClass: "text-brand-magenta",
    delay: "0ms",
  },
  {
    icon: "campaign",
    title: "Marketing Digital",
    description:
      "Campagnes publicitaires ciblées Google Ads et Meta pour un retour sur investissement immédiat et mesurable.",
    features: ["Gestion de Budgets Ads", "Reporting Mensuel"],
    cardClass: "border-t-primary",
    iconClass: "bg-primary/10 text-primary",
    textClass: "text-primary",
    delay: "100ms",
  },
  {
    icon: "brush",
    title: "Branding & Identité",
    description:
      "Création d'univers visuels forts qui capturent l'essence de votre marque et marquent les esprits.",
    features: ["Création de Logotype", "Charte Graphique"],
    cardClass: "border-t-secondary",
    iconClass: "bg-secondary/10 text-secondary",
    textClass: "text-secondary",
    delay: "200ms",
  },
];

const methodology = [
  {
    step: "1",
    title: "Audit & Découverte",
    description:
      "Analyse approfondie de vos besoins, de votre marché et de vos objectifs stratégiques.",
    active: true,
  },
  {
    step: "2",
    title: "Stratégie & Planning",
    description:
      "Définition de la feuille de route technique et créative pour garantir le succès du projet.",
  },
  {
    step: "3",
    title: "Design UI/UX",
    description:
      "Conception visuelle centrée sur l'utilisateur, privilégiant l'esthétique et l'accessibilité.",
  },
  {
    step: "4",
    title: "Développement & Tests",
    description:
      "Codage rigoureux suivant les standards actuels avec une phase intensive de QA.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <RevealOnScroll />
      <Navigation />
      <main className="bg-background text-on-surface">
        <header className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary-container">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-surface to-background" />
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            <div className="space-y-stack-md reveal">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm border border-primary/20 tracking-widest uppercase">
                Notre Expertise
              </span>
              <h1 className="font-display-xl text-display-xl lg:text-display-xl-desktop text-on-surface">
                Nos Expertises <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Digitales
                </span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
                Nous fusionnons ingénierie de pointe et design avant-gardiste
                pour propulser votre vision dans l&apos;ère numérique. Une
                approche technique sans compromis pour des résultats
                d&apos;exception.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  className="px-8 py-4 bg-secondary text-on-secondary font-bold rounded-xl shadow-[0_0_20px_rgba(255,98,0,0.3)] hover:scale-105 transition-transform"
                  href="#solutions"
                >
                  Explorer nos solutions
                </a>
                <Link
                  className="px-8 py-4 border-2 border-white/20 text-on-surface font-bold rounded-xl hover:bg-white/5 transition-colors"
                  href="/#realisations"
                >
                  Consulter nos projets
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px] reveal">
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Poste de travail high-tech avec des interfaces de développement web."
                  className="w-full h-full object-cover mix-blend-overlay opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1JA3nCMa7FO1zxr7kYa-hWLGS92f2B5eNjCn24TS2M0x7Olsdr3nIVy8TUGvnKGL8eVYFN-lv6H9_TLU8nDuDkHjIEW8WiV-U2vwHuOq7QvLND4CBMwlq9ZHtGJScwiMiG9CmvuBmVcSlCoQFm9EsxzfteUK0Ud7CAdGos6MV8IkPNVizZBWgepu5GwyIFh0VDcNGE2_btq-xCyXbYNQWHhBEFtDgwN8ykjKcLDQ9k9v96u_imfGlu7SwuGB_ENaosUcWg5_p_Bk"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-secondary rounded-tr-3xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary rounded-bl-3xl" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[80px]"
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="liquid-divider"
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              />
            </svg>
          </div>
        </header>

        <section
          className="py-section-py px-gutter max-w-container-max mx-auto overflow-hidden"
          id="solutions"
        >
          <div className="text-center mb-stack-lg reveal">
            <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg-desktop text-on-surface mb-4">
              Solutions d&apos;Ingénierie Digitale
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Des services spécialisés conçus pour répondre aux défis les plus
              complexes de l&apos;économie numérique moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                className={`glass-card p-8 rounded-2xl border-t-2 ${service.cardClass} reveal`}
                key={service.title}
                style={{ transitionDelay: service.delay }}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 ${service.iconClass}`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-lg text-2xl text-on-surface mb-4">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8 text-on-surface-variant">
                  {service.features.map((feature) => (
                    <li className="flex items-center gap-2" key={feature}>
                      <span
                        className={`material-symbols-outlined text-sm ${service.textClass}`}
                      >
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`flex items-center gap-2 ${service.textClass} font-bold hover:gap-4 transition-all group`}
                  href={WHATSAPP_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  En savoir plus
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="py-section-py bg-surface-container-low relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
              <div className="reveal">
                <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg-desktop text-on-surface mb-8">
                  Notre Méthodologie
                </h2>
                <div className="space-y-8">
                  {methodology.map((item) => (
                    <div className="flex gap-6 group" key={item.step}>
                      <div
                        className={
                          item.active
                            ? "flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-on-primary"
                            : "flex-shrink-0 w-12 h-12 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center font-bold text-primary"
                        }
                      >
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-on-surface mb-2">
                          {item.title}
                        </h4>
                        <p className="text-on-surface-variant">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="relative reveal"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="aspect-square glass-card rounded-full p-12 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-8xl text-secondary mb-4 animate-pulse">
                      rocket_launch
                    </span>
                    <h3 className="text-3xl font-black text-on-surface">
                      LANCEMENT
                    </h3>
                    <p className="text-on-surface-variant mt-2 uppercase tracking-widest font-label-sm text-label-sm">
                      Succès Garanti
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] border border-dashed border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-py px-gutter" id="contact">
          <div className="max-w-container-max mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-container to-surface rounded-[40px] p-8 md:p-24 text-center">
              <div className="relative z-10 space-y-stack-md max-w-3xl mx-auto reveal">
                <img
                  alt="Ulrich-TECH Logo"
                  className="h-20 mx-auto mb-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu0uAWlZIq5rZy0RTQmU7SbYMwyvjEN94T1-VKddNK0gyCPO63q4Fnkwzg4QwKEVWTzZJqkmHDipJoq56jfrJwzk41T6CWXW2-zkZRWWuOrqTLZzOE_KplyljTKvuXulyaGII2L3XvhxjS3xjToAaqHcHLdVRTaKAqqcGcpFjmRS9QqPFBojtwYVKv1qpGWuMtchU9BYLw2RyvqUlEgKJwJ3XI5YnVFmRk_mSMopKw9mXe5cAIxbpGTEBOSd2k8Gp0LuCAo_Xo9uM"
                />
                <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg-desktop text-on-surface">
                  Prêt à transformer votre présence en ligne ?
                </h2>
                <p className="text-body-lg text-on-surface-variant">
                  Parlons de votre projet. Nos experts sont prêts à concevoir la
                  solution technologique qui vous démarquera de la concurrence.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <a
                    className="px-10 py-5 bg-secondary text-on-secondary font-bold text-lg rounded-2xl hover:shadow-[0_0_30px_rgba(255,98,0,0.4)] transition-all flex items-center justify-center gap-3"
                    href={WHATSAPP_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined">
                      description
                    </span>
                    Demander un devis gratuit
                  </a>
                  <a
                    className="px-10 py-5 border-2 border-white/20 text-on-surface font-bold text-lg rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-3"
                    href={WHATSAPP_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined">call</span>
                    Nous contacter
                  </a>
                </div>
              </div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

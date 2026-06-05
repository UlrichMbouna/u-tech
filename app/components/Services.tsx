export default function Services() {
  const services = [
    {
      icon: "language",
      title: "Sites Vitrines",
      description:
        "Des sites professionnels pour présenter votre activité et inspirer une confiance immédiate.",
      borderClass: "border-t-brand-cyan",
      iconClass: "bg-brand-cyan/10 text-brand-cyan",
      linkClass: "text-brand-cyan",
      delay: 0,
    },
    {
      icon: "shopping_cart",
      title: "E-commerce",
      description:
        "Boutiques en ligne sécurisées optimisées pour la conversion, 24h/24 et 7j/7.",
      borderClass: "border-t-secondary",
      iconClass: "bg-secondary/10 text-secondary",
      linkClass: "text-secondary",
      delay: 100,
    },
    {
      icon: "settings_suggest",
      title: "Sur Mesure",
      description:
        "Développement spécifique répondant à vos besoins métiers les plus complexes.",
      borderClass: "border-t-brand-emerald",
      iconClass: "bg-brand-emerald/10 text-brand-emerald",
      linkClass: "text-brand-emerald",
      delay: 200,
    },
    {
      icon: "shield",
      title: "Sécurité & Perf",
      description:
        "Audit, maintenance et optimisation de la performance pour une fiabilité totale.",
      borderClass: "border-t-brand-magenta",
      iconClass: "bg-brand-magenta/10 text-brand-magenta",
      linkClass: "text-brand-magenta",
      delay: 300,
    },
  ];

  return (
    <section className="bg-surface py-section-py relative" id="services">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-20 reveal">
          <span className="font-label-sm text-secondary mb-4 block uppercase">
            Expertise Multidisciplinaire
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg-desktop text-white">
            Nos Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`glass-card p-8 rounded-2xl group border-t-2 ${service.borderClass} reveal`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.iconClass} group-hover:scale-110 transition-transform`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-lg text-xl mb-4">{service.title}</h3>
              <p className="text-on-surface-variant text-body-md mb-6">
                {service.description}
              </p>
              <a
                className={`${service.linkClass} font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all`}
                href="#"
              >
                Découvrir{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: "psychology",
      title: "Conception Stratégique",
      description:
        "Nous ne nous contentons pas de coder. Nous analysons votre marché pour créer des solutions qui convertissent.",
      iconClass: "text-secondary group-hover:bg-secondary",
    },
    {
      icon: "bolt",
      title: "Performance Sans Faille",
      description:
        "Des temps de chargement ultra-rapides et un SEO optimisé nativement dès la première ligne de code.",
      iconClass: "text-brand-cyan group-hover:bg-brand-cyan",
    },
    {
      icon: "support_agent",
      title: "Accompagnement Dédié",
      description:
        "Un support réactif et humain. Nous sommes vos partenaires techniques sur le long terme.",
      iconClass: "text-brand-emerald group-hover:bg-brand-emerald",
    },
  ];

  return (
    <section className="bg-surface py-section-py relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <span className="font-label-sm text-secondary mb-4 block uppercase">
            ADN Ulrich-TECH
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg-desktop text-white mb-10">
            Pourquoi nous faire confiance pour votre prochain projet ?
          </h2>
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div
                  className={`mt-1 w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center ${feature.iconClass} group-hover:text-white transition-all`}
                >
                  <span className="material-symbols-outlined">
                    {feature.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-on-surface-variant">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative reveal">
          <div className="relative z-10 glass-card p-12 rounded-[40px] text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-brand-cyan/5 -z-10"></div>
            <div className="text-[120px] font-black text-white/5 absolute -top-10 -left-10 select-none">
              100%
            </div>
            <div className="relative">
              <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-secondary text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <h3 className="text-4xl font-black text-white mb-4">
                Satisfaction Garantie
              </h3>
              <p className="text-on-surface-variant mb-8 text-lg">
                Plus de 150 projets livrés avec un taux de satisfaction client
                exceptionnel.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-white">24h</p>
                  <p className="text-[10px] uppercase text-secondary tracking-widest font-bold">
                    Devis Gratuit
                  </p>
                </div>
                <div className="border-x border-white/10">
                  <p className="text-2xl font-bold text-white">5★</p>
                  <p className="text-[10px] uppercase text-secondary tracking-widest font-bold">
                    Avis Google
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">0%</p>
                  <p className="text-[10px] uppercase text-secondary tracking-widest font-bold">
                    Retard Livraison
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decoration */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[40px] border-secondary/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

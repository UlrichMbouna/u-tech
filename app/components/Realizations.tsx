export default function Realizations() {
  const projects = [
    {
      title: "Vogue Studio",
      category: "E-Commerce",
      description:
        "Refonte complète de l'expérience d'achat et optimisation du tunnel de conversion.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMCY6L0hmn4bDuJXTW-Rr5R8D1RYlq7nGecxe62soLAKGKUrV86nx0N1fLDJ1c0s0xcoQGtz_-wxBeW9DtxCPwd1UlZgDVqBn8ej76scQ_tlTzctBeICjba7btvdqupHVpzs-ebkMSaSSlmMSj_f3ADbfItRMY4wSPfRixH3gpWUf1LmvA2mhZDs9H7IxooxoxpYfsmyvWKyvwgPsZ7cbYnjm-plz27ZwfjgXKc0Ut_WL_g-hbWvAU27gh9qkx-T5zmaW3sBTmbNU",
      categoryClass: "bg-secondary",
      colSpan: "md:col-span-2",
      delay: 0,
      size: "large",
    },
    {
      title: "Engage-Dash",
      category: "SaaS Solution",
      description: "Plateforme de monitoring analytique en temps réel.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD4LRhfAth-09qzhoKWdQpuGsRRiBUywcB4Yzg4hlN1G76C3YXNbsj9v8NYglDFd_BEFOClEb8V_dJv2FnJJjGTtTxwrPAMegKrnyQXP0VZP03V5Xhv7XRxfTadzsk9YAuWi9xIlOAkQkPCg24HhT3OHAQNgKqV0eq0KkNr0dQJ72CpFCnLPA34Jt8fbdkbhQAqBRlD79iIU771OTKWsjyXtLY0DXUoNwVnFBAXnLMkJxlb4UL6HYdK3_Sh3ABnLZBt8b_x_RIAo50",
      categoryClass: "bg-brand-cyan",
      colSpan: "",
      delay: 200,
      size: "medium",
    },
    {
      title: "Artisans & Co",
      category: "Portfolio UX",
      description: "Valorisation numérique d'un collectif d'architectes.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8ARsUonsJOYyFjYaV7aqzdVQTS7jJIperzApJ7_FAyzff-MFORqL3tBQFs9OqsR0h67j5U-z4xtUkNQkZOHqOLzvZU57BtGtPRI53034ODfWCr5qaVqEvliG6wRIxh4nf_aJnaZkfD8G-GhO6XrHp485dSE3OE7eoM26UEbNcvpGPVtk3UDjOykeaPlEHecXIOUqJ9mYk1yoBk3KPYJzIMwAP3v1J9UibBfj1_tt5qqPPIFVizHL_Y0KjX_FshuG3l22OUnURDw",
      categoryClass: "bg-brand-magenta",
      colSpan: "",
      delay: 300,
      size: "medium",
    },
    {
      title: "Global Logistics",
      category: "Mobile App",
      description:
        "Solution de tracking internationale et gestion de flotte décentralisée.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDbqO3X4G5lwYg3lu8S4yg7nQ6KvjSzifUtrLB_7nWZ17knPEdWtHyT1YOYfUIRmi5vLOrAykhYWL3oi0VyYbxVqXPhaNRle9-mzramtYThViCPfEezL4nqDj487sMv2_BEDsdhyMyY4jdQwGXe-xjMn3ty_6KltVpnmNSeFOLg7_UQvDDbGz54Rgx908JBUJ73Z4KhMIghLP-uF3jVXcBEZXKp1qtDVVdTjImIw3h2jCulpxIJbDxTDwuld2WMq8YTztyK09bQjwc",
      categoryClass: "bg-brand-emerald",
      colSpan: "md:col-span-2",
      delay: 400,
      size: "large",
    },
  ];

  return (
    <section
      className="bg-surface-container-lowest py-section-py overflow-hidden"
      id="realisations"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div className="max-w-xl">
            <span className="font-label-sm text-secondary mb-4 block uppercase">
              Portfolio
            </span>
            <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg-desktop text-white mb-4">
              Nos dernières réalisations
            </h2>
            <p className="text-on-surface-variant">
              Découvrez comment nous propulsons nos clients vers le succès avec
              des designs impactants et une technique irréprochable.
            </p>
          </div>
          <button className="hidden md:flex text-white border-b border-white/20 pb-2 font-bold items-center gap-2 hover:border-secondary hover:text-secondary transition-all">
            Tous les projets{" "}
            <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>

        {/* Bento/Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`${project.colSpan} group relative overflow-hidden rounded-3xl h-[450px] reveal`}
              style={{ transitionDelay: `${project.delay}ms` }}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt={project.title}
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span
                  className={`inline-block px-3 py-1 ${project.categoryClass} text-white text-[10px] font-black uppercase tracking-widest rounded mb-4`}
                >
                  {project.category}
                </span>
                <h4
                  className={`${project.size === "large" ? "text-3xl" : "text-2xl"} font-bold text-white mb-2`}
                >
                  {project.title}
                </h4>
                <p className="text-on-surface-variant max-w-md">
                  {project.description}
                </p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

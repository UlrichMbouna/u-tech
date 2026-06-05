import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import RevealOnScroll from "../components/RevealOnScroll";

const WHATSAPP_URL = "https://wa.me/message/HSGYTYPVLT6EP1";

const projects = [
  {
    title: "Luxe & Volupté",
    category: "E-COMMERCE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEwtecjauwu3IlI1yHz5m_RidbySKoArBcAVHznoo2Hb1SdTbvjtyRr9jncJsqB_FAIhazA3taXBLkelQ1zMLD-7ufTHkxuTaMAotzREVp8lU1v_hUZTjcRF15InV8WDXSflYzTLL2r86Bq2jEsR6EGKjvK_92HV5AnEBEeEladLranI5aNFZ_vO48wz4mphFV3wngH8_0rLwh3rJJZfvJ-by6I168nM1dhQkGBCL2ckFT1rxlNvq5kAzhnEtMeR9Pkc9LqRlSwS0",
    alt: "Site e-commerce luxe affiché sur un écran vertical.",
    tags: ["Next.js", "Shopify Plus", "Tailwind"],
    layoutClass: "masonry-item-tall",
  },
  {
    title: "Insight Analytics SaaS",
    category: "CORPORATE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTtyPlLj-EFdU86cq0eIMhi5L5HDABgGevtKixHmcz52s18x77eEhne7lrCf0phq20cjiSxBnjjbTH8vDiNfFcAooE-uI9kYyybp01Ga1QIypEnWZoPdaVd6UkpcgosV18F4LS7jBFKGVXvK3W2A1XkRwaTDCaHItcgLqL6_YvYeoP0vl2OjASGeYTReeMvL_3chJrLvNcS7aje95Sy-vnf4HWmWhLzr3cmGyY_GslJ63kUl8WyXSdNcsfD50EKRorJidhsmlF7ts",
    alt: "Dashboard analytique futuriste avec graphiques lumineux.",
    tags: ["React", "D3.js", "Node.js"],
    layoutClass: "masonry-item-wide",
  },
  {
    title: "Pulse Agency",
    category: "LANDING PAGE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJG2H4iZGZ1bKhwCbtweExSnK1DMcwOY23rz04-KfiVnBk-K8rArhDZFBk64a0NqGrg51FlcUXETfu86KptfNlR3ZIq2hBzEbxvDvL7HqyNEVYhNSSP6-yr8x6iyf6UVeYA-D9h15W0UUiGuEnv-F3dCy0ixWOewb2vcMN_f1KPyTxrK8jWXTmz3Zqg66IQiMtDfz67UZq8fupLq0ZYdl2o3vWiUaUG9Zv2mA3TQadSz3_Q5ytIL-UH1fvkiGrv6CO-cwEIHlJ7PU",
    alt: "Landing page d'agence moderne avec formes fluides.",
    tags: ["Webflow", "GSAP"],
    layoutClass: "",
  },
  {
    title: "Identity Core",
    category: "BRANDING",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR4qYpv5RtMupMhduGsJ-cr4zXU1P0R627xVdOFDgZtgEEo7I71ndCzKo9Tc1vVukm3NoI4z60zhdmRkFW2ht-03uvkMagToy9ualibnrj7ZYYUqWjJEndIAOSJdywLH-1ISxFU8cCujdeit8qUx--y-8Hw7nFX9Jz4OfU85Co8Cpuq09wqQd5B9nQdjoyA0qAQaZ64W4px4vDZW8xFLeZiCaDuwwvJt8cA2-Gz3UBn4OF6zmJkcF8FCYzZKVKMlY93cHHXreKAHU",
    alt: "Workspace d'ingénierie logicielle avec plusieurs écrans.",
    tags: ["Figma", "UI/UX"],
    layoutClass: "",
  },
];

const filters = ["Tous", "E-commerce", "Corporate", "Landing Page", "Branding"];

const logos = [
  { icon: "rocket_launch", label: "SPACE-X" },
  { icon: "cloud", label: "CLOUD-NEBULA" },
  { icon: "bolt", label: "VOLT-ENERGY" },
  { icon: "architecture", label: "STRUCTURE-CO" },
  { icon: "payments", label: "FIN-SOLVE" },
  { icon: "rocket_launch", label: "SPACE-X" },
  { icon: "cloud", label: "CLOUD-NEBULA" },
  { icon: "bolt", label: "VOLT-ENERGY" },
];

export default function RealisationsPage() {
  return (
    <>
      <RevealOnScroll />
      <Navigation />
      <main className="bg-background text-on-surface pt-24">
        <section className="relative px-gutter py-section-py overflow-hidden">
          <div className="max-w-container-max mx-auto relative z-10 text-center reveal">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block">
              Portfolio d&apos;Excellence
            </span>
            <h1 className="font-display-xl text-display-xl lg:text-display-xl-desktop text-on-surface mb-6 leading-tight">
              Nos Projets qui <br />
              <span className="italic font-quote-accent text-secondary">
                Inspirent
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-80">
              Découvrez une sélection de nos déploiements les plus audacieux, où
              l&apos;ingénierie rigoureuse rencontre le design d&apos;avant-garde
              pour transformer des visions en réalités numériques.
            </p>
          </div>
        </section>

        <section className="px-gutter pb-stack-lg">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-wrap justify-center gap-3 reveal">
              {filters.map((filter, index) => (
                <button
                  className={
                    index === 0
                      ? "px-6 py-2 rounded-full border border-secondary bg-secondary text-on-secondary font-bold text-label-sm transition-all shadow-lg"
                      : "px-6 py-2 rounded-full border border-outline text-on-surface-variant font-semibold text-label-sm hover:border-secondary hover:text-secondary transition-all"
                  }
                  key={filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-gutter py-stack-lg bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="masonry-grid">
              {projects.map((project) => (
                <article
                  className={`${project.layoutClass} group relative overflow-hidden rounded-xl bg-surface-container transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl reveal`}
                  key={project.title}
                >
                  <img
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-secondary font-bold text-label-sm mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-headline-lg text-white mb-4">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-[10px] text-white"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-section-py bg-surface overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter mb-12 text-center reveal">
            <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg-desktop text-on-surface opacity-50">
              Ils nous font confiance
            </h2>
          </div>
          <div className="logo-scroll-container">
            <div className="logo-scroll-track gap-24 items-center">
              {logos.map((logo, index) => (
                <div
                  className="flex items-center gap-4 text-on-surface-variant/40 hover:text-on-surface-variant transition-colors grayscale"
                  key={`${logo.label}-${index}`}
                >
                  <span className="material-symbols-outlined text-4xl">
                    {logo.icon}
                  </span>
                  <span className="font-bold text-2xl tracking-tighter">
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-gutter py-section-py overflow-hidden">
          <div className="absolute inset-0 bg-primary-container z-0" />
          <div className="max-w-container-max mx-auto relative z-10 text-center reveal">
            <div className="mb-12">
              <img
                alt="Ulrich-TECH Logo"
                className="h-24 mx-auto mb-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu0uAWlZIq5rZy0RTQmU7SbYMwyvjEN94T1-VKddNK0gyCPO63q4Fnkwzg4QwKEVWTzZJqkmHDipJoq56jfrJwzk41T6CWXW2-zkZRWWuOrqTLZzOE_KplyljTKvuXulyaGII2L3XvhxjS3xjToAaqHcHLdVRTaKAqqcGcpFjmRS9QqPFBojtwYVKv1qpGWuMtchU9BYLw2RyvqUlEgKJwJ3XI5YnVFmRk_mSMopKw9mXe5cAIxbpGTEBOSd2k8Gp0LuCAo_Xo9uM"
              />
              <h2 className="font-display-xl text-display-xl lg:text-display-xl-desktop text-white mb-6">
                Votre projet pourrait être le{" "}
                <span className="text-secondary underline decoration-wavy underline-offset-8">
                  prochain
                </span>
                .
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mx-auto mb-10">
                Prêt à élever vos standards digitaux ? Nos experts sont à votre
                écoute pour concevoir la solution technique qui fera la
                différence.
              </p>
              <a
                className="inline-flex bg-secondary text-on-secondary px-10 py-5 rounded-xl font-black text-body-lg hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(255,98,0,0.4)]"
                href={WHATSAPP_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                LANCEZ VOTRE PROJET MAINTENANT
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[60px] fill-surface"
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
            >
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

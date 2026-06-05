export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Travailler avec Ulrich-TECH a été une révélation. Ils ont compris notre vision complexe et l'ont traduite en une plateforme fluide qui a doublé notre trafic en 3 mois.",
      author: "Sarah Lecomte",
      title: "Directrice Marketing, InnovaGroup",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmaMKBw7MXZHtQQY_gtxlm9_6m5Ag0Gz8MiDjv8WNWaKTE3jdBU7KO-OVptUeCvbXLLh3J95XUvg9yCzYSWDaV-Z9e4VTU9n_7wIoPOKxgPFiVCoD-RN9oqjCEzN6YEFcQjGsdN7iypVC3WyY9johxRPa7VFIg2oPxhqYs0OueouFuSAywT-XfDf31SJ16irlDwILcxhkToQcLP0vzcstdVH11pCVa5x66MVKmKHdN9tsXWgGtvdzvDTlxnERzcnn_opP-GcE4YDE",
      quoteClass: "text-secondary",
      avatarClass: "border-secondary/30",
      delay: 0,
    },
    {
      quote:
        "L'expertise technique de l'équipe est impressionnante. Notre application métier est aujourd'hui le socle de notre croissance. Un partenaire indispensable.",
      author: "Marc Aubry",
      title: "Fondateur, NextLevel SaaS",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZQ6QSZ6dAl935wIWeqFWt4ti-gO_SZGWRM69kMajFUGzQqenRIAgRTgf38e80q6i3K0GwewIpNx8EVZ23DXnL7WMVAd0-DrCTfibnyG5tc-Zbf2wnNDN6mT-_M6Tm_NclXm_-OuYlFC6HtarGsG_8I5CBfPp3hK5G-Z5iux9gdqtbeljkYTxsCuvNhUUGfc1jxb_W4IbS_ORElYdqQh_LrYeKEJyGztWn4OD-MPD8l5pkzhtgSc4WOtRxeiPkhtIU4XM4pEuYX4",
      quoteClass: "text-brand-cyan",
      avatarClass: "border-brand-cyan/30",
      delay: 200,
    },
  ];

  return (
    <section className="bg-surface-container-lowest py-section-py overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-20 reveal">
          <span className="font-label-sm text-secondary mb-4 block uppercase">
            Feedback
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg-desktop text-white">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-card p-10 rounded-2xl flex-1 reveal"
              style={{ transitionDelay: `${testimonial.delay}ms` }}
            >
              <span
                className={`material-symbols-outlined ${testimonial.quoteClass} text-5xl mb-6`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="font-quote-accent text-quote-accent md:text-quote-accent-desktop italic text-white/90 mb-8 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full overflow-hidden border-2 ${testimonial.avatarClass}`}
                >
                  <img alt="Client" src={testimonial.image} />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

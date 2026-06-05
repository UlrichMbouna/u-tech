export default function Footer() {
  const footerLinks = {
    expertise: [
      { label: "Développement Web", href: "#" },
      { label: "Applications Mobile", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "Audit Technique", href: "#" },
    ],
    company: [
      { label: "Projets", href: "#" },
      { label: "Vision", href: "#" },
      { label: "Équipe", href: "#" },
      { label: "Blog", href: "#" },
    ],
    legal: [
      { label: "Confidentialité", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Mentions Légales", href: "#" },
    ],
  };

  return (
    <footer className="bg-surface-container-lowest pt-section-py pb-gutter">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-stack-md reveal">
        <div className="col-span-1 md:col-span-1">
          <img
            alt="Ulrich-TECH"
            className="h-8 w-auto mb-6"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu0uAWlZIq5rZy0RTQmU7SbYMwyvjEN94T1-VKddNK0gyCPO63q4Fnkwzg4QwKEVWTzZJqkmHDipJoq56jfrJwzk41T6CWXW2-zkZRWWuOrqTLZzOE_KplyljTKvuXulyaGII2L3XvhxjS3xjToAaqHcHLdVRTaKAqqcGcpFjmRS9QqPFBojtwYVKv1qpGWuMtchU9BYLw2RyvqUlEgKJwJ3XI5YnVFmRk_mSMopKw9mXe5cAIxbpGTEBOSd2k8Gp0LuCAo_Xo9uM"
          />
          <p className="text-on-surface-variant text-sm mb-6 max-w-xs">
            Solutions d&apos;ingénierie digitale premium pour entreprises
            visionnaires.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">link</span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
            Expertise
          </h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            {footerLinks.expertise.map((link, idx) => (
              <li key={idx}>
                <a className="hover:text-white transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
            Compagnie
          </h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            {footerLinks.company.map((link, idx) => (
              <li key={idx}>
                <a className="hover:text-white transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
            Légal
          </h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            {footerLinks.legal.map((link, idx) => (
              <li key={idx}>
                <a className="hover:text-white transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-xs">
        <p>© 2024 Ulrich-TECH Engineering Solutions. Tous droits réservés.</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px] text-brand-emerald">
              check_circle
            </span>
            100% Engagé pour votre succès
          </div>
        </div>
      </div>
    </footer>
  );
}

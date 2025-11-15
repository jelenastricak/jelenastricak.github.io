import { siteContent } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="py-10 border-t border-white/10">
      <h2 className="text-2xl font-serif font-semibold text-accent">{siteContent.contact.title}</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm" style={{ color: 'color-mix(in srgb, var(--ink) 80%, transparent)' }}>
            {siteContent.contact.description}
          </p>
          {siteContent.contact.email && (
            <p className="text-lg">
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-accent hover:underline"
              >
                {siteContent.contact.email}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

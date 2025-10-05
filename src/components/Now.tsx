import { siteContent } from '../data/content';

const Now = () => {
  return (
    <section id="now" className="py-10 border-t border-white/10">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-semibold text-accent">{siteContent.now.title}</h2>
        <p className="text-sm text-accent">
          Updated <span>{siteContent.now.updatedDate}</span>
        </p>
      </div>
      <p className="mt-3 text-sm" style={{ color: 'color-mix(in srgb, var(--ink) 80%, transparent)' }}>
        {siteContent.now.description}
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {siteContent.now.items.map((item, index) => (
          <li key={index} className="rounded-xl border border-white/10 p-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Now;

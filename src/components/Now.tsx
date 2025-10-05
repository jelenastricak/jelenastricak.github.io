import { siteContent } from '../data/content';

interface NowItem {
  text: string;
  link?: { url: string; text: string };
  links?: Array<{ url: string; text: string }>;
  suffix?: string;
}

const Now = () => {
  const renderItem = (item: NowItem | string) => {
    // Handle old string format
    if (typeof item === 'string') {
      return item;
    }

    // Handle new object format with links
    return (
      <>
        {item.text}
        {item.link && (
          <a
            href={item.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {item.link.text}
          </a>
        )}
        {item.links && item.links.map((link, idx) => (
          <span key={idx}>
            {idx > 0 && (idx === item.links!.length - 1 ? ', and ' : ', ')}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {link.text}
            </a>
          </span>
        ))}
        {item.suffix}
      </>
    );
  };

  return (
    <section id="now" className="py-10 border-t border-white/10">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-serif font-semibold text-accent">{siteContent.now.title}</h2>
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
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Now;

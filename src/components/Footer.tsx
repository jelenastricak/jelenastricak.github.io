import { useEffect, useState } from 'react';
import { siteContent } from '../data/content';
import { SocialIcon } from './Icons';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-8 border-t border-white/10 py-8 text-sm text-accent">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p>© {currentYear} {siteContent.name}</p>
        <nav className="flex items-center gap-4">
          {siteContent.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              aria-label={link.ariaLabel}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <SocialIcon icon={link.icon} className="h-5 w-5" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

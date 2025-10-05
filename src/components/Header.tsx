import { siteContent } from '../data/content';

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 font-serif font-semibold tracking-tight text-accent"
          >
            <span>{siteContent.name}</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-accent">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="#now"
              onClick={(e) => scrollToSection(e, 'now')}
              className="hover:underline underline-offset-4"
            >
              Now
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

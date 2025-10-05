import { siteContent } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-10 border-t border-white/10">
      <h2 className="text-2xl font-serif font-semibold text-accent">{siteContent.about.title}</h2>
      <div className="mt-4">
        <div className="space-y-4">
          {siteContent.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

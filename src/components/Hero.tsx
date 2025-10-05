import { Fragment } from 'react';
import { siteContent } from '../data/content';

const Hero = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h1 className="mt-3 text-4xl sm:text-5xl font-serif font-extrabold leading-tight text-accent">
          {siteContent.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base/7" style={{ color: 'color-mix(in srgb, var(--ink) 75%, transparent)' }}>
          {siteContent.description.split('right now').map((part, index, array) => (
            <Fragment key={index}>
              {part}
              {index < array.length - 1 && <span className="whitespace-nowrap">right now</span>}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Hero;

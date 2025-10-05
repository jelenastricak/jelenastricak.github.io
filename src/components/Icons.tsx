interface IconProps {
  className?: string;
}

export const GlobeIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2c3 3.5 3 16.5 0 20M12 2c-3 3.5-3 16.5 0 20"/>
  </svg>
);

export const LinkedInIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2a3 3 0 016 0v8h-4v-7a1.5 1.5 0 10-3 0v7h-3z"/>
  </svg>
);

export const MediumIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 6v12h2.4l5-9.2L12 18h2l4-8v8H20V6h-2.4l-4.2 8.4L12 6H9.6L6.2 12.8V6H4z"/>
  </svg>
);

export const MapPinIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 21s-7-6-7-11a7 7 0 1114 0c0 5-7 11-7 11z"/>
    <circle cx="12" cy="10" r="2.5"/>
  </svg>
);

export const FileIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <path d="M14 2v6h6"/>
    <path d="M9 13h2a2 2 0 010 4H9v-4zm0 0v4M14 13h3m-3 4h3"/>
  </svg>
);

export const CoinIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9"/>
    <path d="M15.5 7.5c-1.6-1.1-4.4-1.1-6 0-1.2.8-1.1 2.5.7 3l3 .7c2 .5 2.1 2.2.9 3-1.6 1.1-4.4 1.1-6 0"/>
  </svg>
);

interface SocialIconProps extends IconProps {
  icon: string;
}

export const SocialIcon = ({ icon, className }: SocialIconProps) => {
  switch (icon) {
    case 'globe':
      return <GlobeIcon className={className} />;
    case 'linkedin':
      return <LinkedInIcon className={className} />;
    case 'medium':
      return <MediumIcon className={className} />;
    case 'map-pin':
      return <MapPinIcon className={className} />;
    case 'file':
      return <FileIcon className={className} />;
    case 'coin':
      return <CoinIcon className={className} />;
    default:
      return <GlobeIcon className={className} />;
  }
};

interface WorkIconProperties {
  alt: string;
  className?: string;
}

const WorkIcon = ({ alt, className = "" }: WorkIconProperties) => {
  return (
    <svg
      aria-label={alt}
      className={className}
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
    </svg>
  );
};

export default WorkIcon;

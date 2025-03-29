interface TestIconProperties {
  alt: string;
  className?: string;
}

const TestIcon = ({ alt, className = "" }: TestIconProperties) => {
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
      <path
        d="M18.218,1 L23,1 L23,19 L1,19 L1,1 L6,1 M16.9999996,9.99999996 C13,6.99999996 11,13 7.00000002,9.99999996 M5,23 L19,23 L5,23 Z M10,1 L10,5.773 L5,12.955 L5,15 L19,15 L19,12.955 L14,5.773 L14,1 M8,1 L16,1 L8,1 Z M8,23 L16,23 L16,19 L8,19 L8,23 Z"
        fill="none"
        strokeWidth="2"></path>
    </svg>
  );
};

export default TestIcon;

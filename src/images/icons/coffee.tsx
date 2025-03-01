/* eslint-disable max-len */

interface CoffeeIconProps {
  alt: string;
  className?: string;
}

const CoffeeIcon = ({ alt, className = "" }: CoffeeIconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={alt}
      className={className}>
      <path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
    </svg>
  );
};

export default CoffeeIcon;

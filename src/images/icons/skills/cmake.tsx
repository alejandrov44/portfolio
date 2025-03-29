interface CMakeIconProperties {
  alt: string;
  className?: string;
}

const CMakeIcon = ({ alt, className = "" }: CMakeIconProperties) => {
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
      <path d="M11.769.066L.067 23.206l12.76-10.843zM23.207 23.934L7.471 17.587 0 23.934zM24 23.736L12.298.463l1.719 19.24zM12.893 12.959l-5.025 4.298 5.62 2.248z" />
    </svg>
  );
};
export default CMakeIcon;

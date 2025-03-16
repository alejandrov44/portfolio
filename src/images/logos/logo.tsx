
interface PageLogoProperties {
  alt: string;
  className?: string;
}

const PageLogo = ({ alt, className = "" }: PageLogoProperties) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="2757.000000pt"
      height="1835.000000pt"
      viewBox="0 0 2757.000000 1835.000000"
      preserveAspectRatio="xMidYMid meet"
      aria-label={alt}
      className={className}>
      <g transform="translate(0.000000,1835.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M10 9180 l0 -9170 13780 0 13780 0 0 9170 0 9170 -13780 0 -13780 00 -9170z m12701 4642 c71 -29 128 -77 157 -135 12 -25 294 -1079 626 -2342l604 -2297 -990 -1717 c-545 -944 -995 -1720 -1000 -1726 -6 -5 -3 6 5 25 819 200 467 426 994 l412 960 -17 73 -18 73 -1166 0 -1166 0 -84 -327 c-45-181 -127 -503 -181 -717 -106 -420 -122 -460 -186 -492 -36 -18 -75 -19 -688-22 -604 -2 -652 -1 -685 15 -49 25 -72 74 -67 139 8 80 1903 7278 1932 733450 98 128 158 235 179 25 5 439 8 920 8 l875 -2 56 -23z m6073 -1662 c77 -3991 -65 91 -168 0 -83 -44 -258 -918 -3632 -505 -1950 -929 -3581 -942 -3625-29 -96 -70 -156 -133 -193 l-47 -27 -885 0 -885 0 -44 23 c-51 28 -86 63-112 113 -22 45 -941 3593 -937 3619 3 18 2021 3520 2025 3516 2 -1 -192 -454-429 -1007 -237 -552 -431 -1012 -430 -1022 0 -10 178 -846 393 -1858 l393-1840 25 3 c24 3 29 28 651 2943 346 1617 633 2959 639 2982 15 57 69 133 110157 76 44 94 45 756 43 l630 -2 49 -25z" />
        <path d="M11725 12378 c-26 -108 -847 -3397 -851 -3410 -5 -17 41 -18 881 -18840 0 886 1 881 18 -3 9 -193 769 -421 1687 -229 919 -420 1687 -426 1708 -830 -14 37 -34 37 -17 0 -26 -7 -30 -22z" />
      </g>
    </svg>
  );
};

export default PageLogo;

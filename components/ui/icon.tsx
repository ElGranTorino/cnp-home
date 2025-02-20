import { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<HTMLOrSVGElement>;
const Icon = {
  arrowRight: (props: IconProps) => (
    <svg
      width="55"
      height="16"
      viewBox="0 0 55 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M54.7071 8.70711C55.0976 8.31658 55.0976 7.68342 54.7071 7.29289L48.3431 0.928932C47.9526 0.538408 47.3195 0.538408 46.9289 0.928932C46.5384 1.31946 46.5384 1.95262 46.9289 2.34315L52.5858 8L46.9289 13.6569C46.5384 14.0474 46.5384 14.6805 46.9289 15.0711C47.3195 15.4616 47.9526 15.4616 48.3431 15.0711L54.7071 8.70711ZM3.72463e-09 9L54 9L54 7L-3.72463e-09 7L3.72463e-09 9Z"
        fill="#FBD193"
      />
    </svg>
  ),
};

export { Icon };

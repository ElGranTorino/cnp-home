import Image from "next/image";
import Link from "next/link";

const sizes = {
  sm: {
    width: 188,
    height: 41,
  },
  md: {
    width: 213,
    height: 47,
  },
} as const;

type LogoSize = keyof typeof sizes;

function Logo({ size = "md" }: { size?: LogoSize }) {
  return (
    <Link href={"/"}>
      <Image
        src={"/img/misc/logo.svg"}
        width={sizes[size].width}
        height={sizes[size].height}
        alt="collect&pay logo"
      />
    </Link>
  );
}
export { Logo };

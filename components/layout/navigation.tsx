import { cn } from "@/utils/lib";
import { HTMLAttributes } from "react";
import { Button } from "@/components";
import Link from "next/link";

function Navigation({
  className,
  items = [],
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  items?: { label: string; url: string }[];
}) {
  return (
    <nav className={cn(className)} {...props}>
      <NavList className="mr-9">
        {items.map((item, i) => (
          <NavItem key={i} data={item} />
        ))}
      </NavList>
      <Button variant="accent">Sign In</Button>
      <Button className="ml-[15px]">Open an account</Button>
    </nav>
  );
}

function NavList({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("flex items-center gap-7", className)} {...props}>
      {children}
    </ul>
  );
}

function NavItem({
  className,
  children,
  data,
  ...props
}: HTMLAttributes<HTMLLIElement> & { data: { label: string; url: string } }) {
  return (
    <li
      className={cn(
        "text-lightest text-sm font-kharkiv leading-5 uppercase hover:text-accent duration-200",
        className
      )}
      {...props}
    >
      <Link href={data.url}>{data.label}</Link>
    </li>
  );
}
export { Navigation, NavList, NavItem };

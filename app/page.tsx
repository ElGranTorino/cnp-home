import { Container, Header, Logo, Navigation } from "@/components";
import { Hero } from "@/components";
import { Fragment } from "react";

const navItems = [
  {
    label: "Jobs",
    url: "/",
  },
  {
    label: "Referral program",
    url: "/",
  },
  {
    label: "Contact us",
    url: "/",
  },
] as { label: string; url: string }[];

export default function Home() {
  return (
    <Fragment>
      <Header>
        <Container className="flex items-center justify-between w-full">
          <Logo />
          <Navigation items={navItems} className="flex" />
        </Container>
      </Header>
      <Hero />
    </Fragment>
  );
}

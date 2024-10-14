"use client";

import {
  Button,
  Container,
  HeroBlurPanels,
  Icon,
  Section,
  Title,
} from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAnimate } from "framer-motion/mini";
import { useEffect } from "react";

const PANELS_QUANTITY = 23;

function Hero() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { backgroundPosition: "-90% 0" }, { duration: 1.5 });
  }, []);
  return (
    <Section className="bg-darkest h-[1100px] grid" hasBottomClip>
      <div className="grid grid-cols-2 ">
        <HeroBlurPanels
          quantity={PANELS_QUANTITY}
          className="absolute left-0 top-0 z-[100]"
        />
        <div className="col-span-2 bg-hero bg-cover" ref={scope}>
          <Container className="text-white relative flex justify-between pt-[250px] bg-transparent">
            <div className="relative z-[100]">
              <motion.div
                className="overflow-hidden w-0"
                animate={{ width: "100%" }}
                initial={{ width: 0 }}
                transition={{ duration: 1.2, delay: 0.4, easings: ["easeIn"] }}
              >
                <Title
                  variant="light"
                  size="lg"
                  className="uppercase leading-none "
                >
                  Collect
                </Title>
                <Title
                  variant="light"
                  size="xl"
                  className="uppercase leading-none"
                >
                  Wisely
                </Title>
                <Title
                  variant="accent"
                  size="sm"
                  className="uppercase leading-none whitespace-nowrap"
                >
                  Pay Safely
                </Title>
              </motion.div>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: 1.5, easings: ["easeIn"] }}
                className="w-full mt-[42px]"
              >
                <Button
                  className="w-full"
                  size="lg"
                  variant="accent"
                  endContent={<Icon.arrowRight className="ml-5" />}
                >
                  Open an account now
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative z-50"
              animate={{ x: "65px", rotate: "0deg" }}
              initial={{ x: "-2000px", rotate: "45deg", y: "-60px" }}
              transition={{ duration: 1.5, easings: ["easeIn"] }}
            >
              <motion.div
                className="absolute z-30"
                animate={{ y: "-15px", rotate: "0deg", opacity: 1 }}
                initial={{
                  y: "-35px",
                  rotate: "41deg",
                  opacity: 0,
                  left: "45%",
                }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <Image
                  width={121}
                  height={174}
                  src="/img/financial/dollar.png"
                  alt="dollar sign"
                  className=""
                />
              </motion.div>
              <motion.div
                className="absolute top-1/4 z-30"
                animate={{ x: "65px", rotate: "0deg", opacity: 1 }}
                initial={{ x: "-35px", rotate: "45deg", opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <Image
                  width={228}
                  height={259}
                  src="/img/financial/euro.png"
                  alt="euro sign"
                />
              </motion.div>
              <motion.div
                className="absolute !z-40"
                animate={{ top: "50%", rotate: "0deg", opacity: 1 }}
                initial={{
                  top: "55%",
                  rotate: "45deg",
                  opacity: 0,
                  left: "45%",
                }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <Image
                  width={168}
                  height={195}
                  src="/img/financial/pound.png"
                  alt="pound sign"
                />
              </motion.div>
              <Image
                width={613}
                height={878}
                src="/img/misc/planet.png"
                alt="planet in brand colors"
                className="relateive z-30"
              />
            </motion.div>
          </Container>
          <motion.div
            className="z-40 absolute"
            animate={{ right: "0" }}
            initial={{ right: "-100%", y: "200px", top: 0 }}
            transition={{ duration: 1, delay: 0.75, easings: ["easeIn"] }}
          >
            <Image
              width={1122}
              height={988}
              src={"/img/misc/particles.png"}
              alt="brand-color particles"
              style={{ mixBlendMode: "lighten" }}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export { Hero };

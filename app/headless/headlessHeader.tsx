"use client";
import { motion } from "framer-motion";
import { NavBar } from "../components/header";

const navigation = [
  { name: "The Offer", href: "/offer" },
  { name: "Headless?", href: "/headless" },
  { name: "The Agency", href: "/agency" },
];

export default function HeadlessHeader() {
  return (
    <div className="bg-gradient-to-b from-darkBlue to-normalBlue">
      <NavBar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="text-4xl font-bold tracking-tight text-grayT sm:text-6xl"
            >
              <span className="text-lightBlue">Headless commerce</span> The{" "}
              <span className="text-yellowT">future</span> of online shopping.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-lg leading-8 text-grayT"
            >
              If you&apos;re looking for a headless ecommerce solution
              that&apos;s easy to use and affordable, then look no further.
            </motion.p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/YellowRockLogo.png";
import { motion } from "framer-motion";

const navigation = [
  { name: "The Offer", href: "/offer" },
  { name: "Headless?", href: "/headless" },
  { name: "The Agency", href: "/agency" },
];

export default function Header() {
  return (
    <div className="bg-gradient-to-b from-lightBlue to-normalBlue">
      <NavBar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-lg lg:max-w-3xl xl:max-w-4xl py-32 sm:py-32 lg:py-36">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="relative font-header rounded-full px-3 py-2 text-sm lg:text-base text-center leading-6 text-grayT ring-1 ring-yellowT hover:ring-skyBlue"
            >
              More flexibility, more control, more possibilities..{" "}
              <a
                href="#"
                className="font-semibold text-yellowT hover:text-skyBlue "
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </div>
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
              className="text-6xl py-8 font-header font-semibold text-grayT sm:text-6xl lg:text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-skyBlue via-white to-yellowT"
            >
              Headless commerce, The future of online shopping.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-xl lg:text-2xl xl:text-3xl font-header leading-8 text-grayT"
            >
              If you&apos;re looking for a headless ecommerce solution
              that&apos;s easy to use and affordable, then look no further.
            </motion.p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="#"
                className="relative rounded-full bg-yellowT px-6 py-2 text-sm font-semibold  leading-6 text-darkBlue ring-1 ring-yellowT hover:bg-skyBlue hover:ring-lightBlue"
              >
                Get started
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href="#"
                className="text-sm font-semibold leading-6 text-yellowT hover:text-skyBlue"
              >
                Learn more <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 xl:max-w-7xl xl:mx-auto"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="/"
            >
              <span className="sr-only">Yellow Rock Agency</span>
              <div className=" relative h-10 w-10 md:h-14 md:w-14 tab:w-20 tab:h-20">
                <Image
                  src={logo}
                  alt="Yellow Rock Agency"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </motion.a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-yellowT"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-grayT hover:text-yellowT"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="https://calendly.com/yellowrock-agency/30min"
              className="relative rounded-full bg-yellowT px-6 py-2 text-sm font-semibold  leading-6 text-darkBlue ring-1 ring-yellowT hover:bg-skyBlue hover:ring-skyBlue"
            >
              Book a Meeting <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-darkBlue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center  justify-between">
              <a href="/" className="h-10 w-10 md:h-14 md:w-14">
                <span className="sr-only">Yellow Rock Agency</span>
                <div className=" relative h-10 w-10 md:h-14 md:w-14">
                  <Image
                    src={logo}
                    alt="Yellow Rock Agency"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-yellowT"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-10 w-10" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-yellowT">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-yellowT hover:skyBlue"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 ">
                  <a
                    href="https://calendly.com/yellowrock-agency/30min"
                    className="relative rounded-full bg-yellowT px-6 py-2 text-sm font-semibold  leading-6 text-darkBlue ring-1 ring-yellowT hover:bg-skyBlue hover:ring-skyBlue"
                  >
                    Book a Meeting
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

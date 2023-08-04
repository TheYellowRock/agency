"use client";
import { Variants, motion } from "framer-motion";

export function SquaresPlusIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-10 w-10 text-darkBlue"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
      ></path>
    </svg>
  );
}

export function AdjustmentsHorizontalIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-10 w-10 text-darkBlue"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      ></path>
    </svg>
  );
}

export function UserPlusIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-10 w-10 text-darkBlue"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
      ></path>
    </svg>
  );
}

const features = [
  {
    name: "Increased flexibility",
    description:
      "Headless commerce gives businesses more flexibility in how they build and deploy their ecommerce platform. This can lead to faster time to market and the ability to adapt to changing market conditions.",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Enhanced personalization",
    description:
      "Headless commerce makes it easier to personalize the shopping experience for each customer. This can be done by using data from the back-end to deliver relevant content and recommendations to each customer.",
    href: "#",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Better customer engagement",
    description:
      "Headless commerce can help businesses to improve customer engagement by providing a more personalized and engaging shopping experience. This can lead to increased sales and customer loyalty.",
    href: "#",
    icon: UserPlusIcon,
  },
];

export default function Features() {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 300,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };
  return (
    <div className="bg-grayT py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-3xl text-center font-bold tracking-tight text-normalBlue sm:text-4xl">
            The future is headless
          </h2>
          <p className="mt-6 text-lg text-center leading-8 text-darkBlue">
            A way to future-proof your ecommerce business and ensure that your
            business can adapt to changing market conditions and customer
            expectations.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                key={feature.name}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-darkBlue">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-yellowT">
                    <feature.icon aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-900">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-lightBlue hover:text-yellowT"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

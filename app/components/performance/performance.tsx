"use client";
import { Variants, motion } from "framer-motion";

const stats = [
  { id: 1, name: "Performance", value: "99%" },
  { id: 2, name: "Accessibility", value: "100%" },
  { id: 3, name: "Best Practices", value: "100%" },
  { id: 4, name: "SEO", value: "100%" },
];

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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function PerformanceBanner() {
  return (
    <div className="bg-yellowT py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <motion.h2
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="text-5xl sm:text-5xl xl:text-6xl font-header text-darkBlue"
            >
              Top Results for Top Businesses
            </motion.h2>
            <motion.p
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="mt-4 text-lg lg:text-xl xl:text-2xl font-header leading-8 text-normalBlue"
            >
              Those are the target stats that we are looking to reach together
              with our clients.
            </motion.p>
          </div>
          <motion.dl
            variants={container}
            initial="hidden"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            animate="visible"
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={item}
                className="flex flex-col bg-grayT/50 p-8"
              >
                <dt className="text-lg font-semibold font-header leading-6 text-normalBlue">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold font-header tracking-tight text-lightBlue">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}

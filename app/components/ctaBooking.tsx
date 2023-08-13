"use client";
import { Variants, motion } from "framer-motion";

export default function CTABooking() {
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
    <div className="bg-gradient-to-b from-skyBlue to-lightBlue">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="text-5xl sm:text-5xl xl:text-6xl  text-darkBlue font-header"
          >
            Book a free consultation meeting with one of our experts.
          </motion.h2>
          <motion.p
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="mx-auto mt-6 max-w-xl text-lg lg:text-xl xl:text-2xl font-header leading-8 text-grayT"
          >
            Book a free 30 min meeting with one of our experts, to go through
            your expectations and challenges, and get an insight on what can we
            bring to your business.
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="https://calendly.com/yellowrock-agency/30min"
              className="relative rounded-full bg-yellowT px-6 py-2 text-base font-semibold font-header leading-6 text-darkBlue ring-1 ring-yellowT hover:bg-grayT hover:ring-lightBlue"
            >
              Book your meeting Now <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

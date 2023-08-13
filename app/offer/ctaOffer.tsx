"use client";
import { motion } from "framer-motion";

export default function CTAOffer() {
  return (
    <div className="bg-yellowT">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-darkBlue sm:text-4xl">
            Book a free consultation meeting
            <br />
            with one of our experts.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-900">
            Book a free 30 min meeting with one of our experts, to go through
            your expectations and challenges, and get an insight on what can we
            bring to your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href="https://calendly.com/yellowrock-agency/30min"
              className="relative rounded-full bg-lightBlue px-6 py-2 text-sm font-semibold  leading-6 text-darkBlue ring-1 ring-lightBlue hover:bg-grayT hover:ring-grayT"
            >
              Book your meeting Now <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

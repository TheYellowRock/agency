import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { NavBar } from "../components/header";
import Image from "next/image";
import headerVector from "../../public/Online shopping-pana.png"

export default function OfferHeader() {
  return (
    <div className="bg-gradient-to-b from-darkBlue to-normalBlue">
      <NavBar />
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto items-center">
            <h1 className="mt-10  text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">
               <span className="text-yellowT">The future</span> is here. We can help you <span className="text-lightBlue">get there.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-grayT text-center">
              We&apos;ll help you make the move to headless commerce with ease.
              So you can focus on what matters most: your customers.
            </p>
            
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Image 
              src={headerVector}
              alt=""
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

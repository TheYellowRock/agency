import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import performanceIllustration from "../../public/Data extraction-bro.png";

const features = [
  {
    name: "Reduced page load times",
    description:
      "Headless architecture can reduce page load times by decoupling the front-end from the back-end. This allows the front-end to be rendered on a different server than the back-end, which can free up the back-end to focus on processing data and serving requests.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Improved scalability",
    description:
      "Headless architecture can improve scalability by allowing for the use of different front-end frameworks for different devices and browsers. This can help to ensure that the user experience is optimized for each platform, and it can also make it easier to scale the website or application to handle more traffic.",
    icon: LockClosedIcon,
  },
  {
    name: "Enhanced security",
    description:
      "Headless architecture can enhance security by isolating the front-end from the back-end. This can help to protect the back-end from attacks that target the front-end, and it can also make it easier to update the front-end without affecting the back-end.",
    icon: ServerIcon,
  },
];

export default function PerformanceSection() {
  return (
    <div className="bg-gradient-to-b from-normalBlue to-lightBlue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A better Performance
          </p>
          <p className="mt-6 text-lg leading-8 text-darkBlue">
            Headless architecture can improve performance in a number of ways.
            First, by decoupling the front-end from the back-end, headless
            architecture allows for more efficient use of resources. The
            front-end can be rendered on a different server than the back-end,
            which can free up the back-end to focus on processing data and
            serving requests.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={performanceIllustration}
            alt="Product screenshot"
            className="mx-auto"
            width={900}
            height={900}
          />
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-yellowT"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline text-darkBlue">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

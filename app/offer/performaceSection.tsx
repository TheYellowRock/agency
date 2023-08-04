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
    <div className="overflow-hidden bg-gradient-to-b from-normalBlue to-lightBlue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A better Performance
              </p>
              <p className="mt-6 text-lg leading-8 text-darkBlue">
                Headless architecture can improve performance in a number of
                ways. First, by decoupling the front-end from the back-end,
                headless architecture allows for more efficient use of
                resources. The front-end can be rendered on a different server
                than the back-end, which can free up the back-end to focus on
                processing data and serving requests.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-yellowT"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-darkBlue">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={performanceIllustration}
            alt="Product screenshot"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

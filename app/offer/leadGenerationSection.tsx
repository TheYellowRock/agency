import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import leadGenerationIllustration from "../../public/Generating new leads-pana.png";

const features = [
  {
    name: "Content marketing:",
    description:
      " We can help you create high-quality content that attracts your target audience and captures their contact information.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Social media marketing:",
    description:
      "We can help you use social media to reach your target audience and generate leads.",
    icon: LockClosedIcon,
  },
  {
    name: "Referral marketing:",
    description:
      "We can help you create a referral program that encourages your current customers to refer their friends and colleagues to your business.",
    icon: ServerIcon,
  },
];

export default function LeadGenerationSection() {
  return (
    <div className="bg-gradient-to-b from-normalBlue to-lightBlue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Generate New Leads
          </p>
          <p className="mt-6 text-lg leading-8 text-darkBlue">
            We know that lead generation can be a challenge, but we're here to
            help. We have a team of experienced professionals who can help you
            create and execute a lead generation strategy that's right for your
            business.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={leadGenerationIllustration}
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

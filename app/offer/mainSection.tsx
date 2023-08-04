import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Customer-centricity',
    description:
      'We put the needs of our customers first, and we are always striving to exceed their expectations.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Innovation',
    description:
      'We are constantly looking for new ways to improve our solutions and deliver the best possible results for our customers.',
    icon: LockClosedIcon,
  },
  {
    name: 'Collaboration',
    description:
      'We believe that the best solutions are created through collaboration, and we work closely with our customers to understand their needs and develop the best possible solutions for them.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Integrity',
    description:
      'We are committed to doing business with integrity, and we always act in the best interests of our customers.',
    icon: FingerPrintIcon,
  },
]

export default function MainSection() {
  return (
    <div className="bg-grayT py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-lightBlue">What do we offer?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-normalBlue sm:text-4xl">
            Our Mission
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900">
          Empower businesses of all sizes to achieve their digital transformation goals by providing them with headless technology solutions that are scalable, flexible, and secure.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-darkBlue">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellowT">
                    <feature.icon className="h-8 w-8 text-darkBlue" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-900">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

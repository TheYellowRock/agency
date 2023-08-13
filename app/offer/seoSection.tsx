import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Content optimization',
    description: 'We can help you to create SEO-friendly content that is relevant to your target audience.',
  },
  { name: 'Technical SEO', description: 'We can help you to optimize your website or application for search engines.' },
  {
    name: 'Link building',
    description: 'We can help you to build high-quality backlinks to your website or application.',
  },
  {
    name: 'Reporting',
    description: 'We can provide you with regular reports on your SEO performance.',
  },
]

export default function SEOSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            
            <p className="mt-2 text-3xl font-bold tracking-tight text-darkBlue sm:text-4xl">SEO for Headless</p>
            <p className="mt-6 text-base leading-7 text-normalBlue">
            We will provide the necessary tools to ensure that your headless website or application is SEO-friendly and that it ranks well in search results.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-normalBlue">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-lightBlue" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

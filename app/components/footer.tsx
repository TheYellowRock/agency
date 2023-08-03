/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const navigation = {
    offer: [
      { name: 'Our Mission', href: '#' },
      { name: 'Performance', href: '#' },
      { name: 'SEO', href: '#' },
      { name: 'Lead Generation', href: '#' },
    ],
    headless: [
      { name: 'What is Headless?', href: '#' },
      { name: 'Why Go Headless', href: '#' },
      { name: 'Flexibility', href: '#' },
      { name: 'SaaS', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-darkBlue" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">The Offer</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.offer.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Headless</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.headless.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 xl:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">Free Consultation</h3>
              <p className="mt-2 mb-6 text-sm leading-6 text-gray-300">
                Book a free consultation meeting to learn more about Headless, and to check if it will fit your business schema.
              </p>
              <a
              href="https://calendly.com/yellowrock-agency/30min"
              className="relative  rounded-full bg-yellowT px-6 py-2 text-sm font-semibold  leading-6 text-darkBlue ring-1 ring-yellowT hover:bg-lightBlue hover:ring-lightBlue"
            >
              Book a Meeting <span aria-hidden="true">&rarr;</span>
            </a>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2023 Yellow Rock Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
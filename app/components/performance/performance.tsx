const stats = [
    { id: 1, name: 'Performance', value: '99%' },
    { id: 2, name: 'Accessibility', value: '100%' },
    { id: 3, name: 'Best Practices', value: '100%' },
    { id: 4, name: 'SEO', value: '100%' },
  ]
  
  export default function PerformanceBanner() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-darkBlue sm:text-4xl">
                Top Results for Top Businesses
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Those are the target stats that we are looking to reach together with our clients.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-grayT/50 p-8">
                  <dt className="text-sm font-semibold leading-6 text-normalBlue">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-lightBlue">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
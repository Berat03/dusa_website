
const callouts = [
  {
    name: 'SRT Training Weekends',
    description: 'We run multiple training weekends, to teach SRT, which most of our caves require.',
    imageSrc: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/bullpotChat.jpg",
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Dinnermeet',
    description: 'Meet with past members at our largest gathering, full of cooking, games and caving.',
    imageSrc: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/dhru.jpg",
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Chrimmermmeet',
    description: 'Our end of term, christmas dinner.',
    imageSrc: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/lookUp.jpg",
    imageAlt: '',
    href: '#',
  },
]

export default function TripleImage() {
  return (
    <div className="bg-custom_bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Our meets</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    {callout.name}
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import img1 from "../assets/srt.jpg"
import img2 from "../assets/group_valley.jpg"
import img3 from "../assets/rift.jpg"
import img4 from "../assets/MaydayJakub.jpg"

const features = [
  { name: 'Founded', description: 'Active since 1969...' },
  { name: 'Training', description: 'Bridge training and leader training' },
  { name: 'Community', description: 'Connect with blah blah' },
  { name: 'Socials', description: 'Weekly social events, often with challenges' },
  { name: 'Equipment', description: 'We have all sorts of equipment, that works' },
  { name: 'Safety', description: 'We priopritise saftey, and haven\'t had a callout in 11+years.' },
]

export default function ImageGridDescription() {
  return (
    <div style={{backgroundColor: 'rgb(10,20,28)'}} className="text-gray-100">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">What we do</h2>
          <p className="mt-4 text-gray-100">
            Lorem Ipsum nto electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-100">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={img1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg w-72 h-72 bg-gray-100 object-cover"
          />
          <img
            src={img2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg w-72 h-72 bg-gray-100 object-cover"
          />
          <img
            src={img3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg w-72 h-72 bg-gray-100 object-cover"
          />
          <img
            src={img4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg w-72 h-72 bg-gray-100 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

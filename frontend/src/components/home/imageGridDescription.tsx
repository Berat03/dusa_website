const features = [
    {name: 'Founded', description: 'Active since 1969, DUSA is full of history and tradition.'},
    {name: 'Training', description: 'We provide SRT training weekends, local practise and leader training.'},
    {name: 'Community', description: 'In addition to current members, we have a sizable community of ex-members who are still active '},
    {name: 'Socials', description: 'As cavers, we love challenges, and these often end up in our frequent socials.'},
    {name: 'Equipment', description: 'We have enough gear to meet our demands, and much of it is brand new'},
    {name: 'Safety', description: 'We haven\'t had a callout or accident in over 13 years!'},
]

export default function ImageGridDescription() {
    return (
        <div style={{backgroundColor: 'rgb(10,20,28)'}} className="text-gray-100">
            <div
                className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Durham University
                        Speleological Association</h2>
                    <p className="mt-4 text-gray-100">
                        Welcome to DUSA, the heart of caving in Durham. Our club is dedicated to
                        introducing newcomers to the exhilarating world of caving, fostering a vibrant community through
                        exciting expeditions, gatherings, and social events. For many, DUSA is where they first
                        encounter the thrill of caving- we believe in offering members the opportunity to delve into
                        caving at their own pace.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-9 lg:gap-x-8">
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
                        src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/me_stuck-min.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg w-72 h-72 bg-gray-100 object-cover"
                    />
                    <img
                        src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/nev-min.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg w-72 h-72 bg-gray-100 object-cover"
                    />
                    <img
                        src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/lastPitchMayday.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg w-72 h-72 bg-gray-100 object-cover"
                    />
                    <img
                        src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/ianImage-min.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg w-72 h-72 bg-gray-100 object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

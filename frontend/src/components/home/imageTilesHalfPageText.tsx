export default function Example() {
    return (
        <div className="relative overflow-hidden bg-custom_bg">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            What makes DUSA special?
                        </h1>
                        <p className="mt-4 text-xl text-gray-300">
                            Caving is unlike anything you've ever tried before. It's incorporates many different aspects
                            from maby different sports, such as climbing and mountaineering, and introduces unique
                            activities such as single rope technique.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div
                                    className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div
                                                className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/dusaDig-min.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/group_valley-min.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/me_stuck-min.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/nev-min.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/noFaceM-min.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/rift-min.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/srt-min.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/gallery"
                                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                            >
                                Explore Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

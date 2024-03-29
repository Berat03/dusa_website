import {EnvelopeIcon} from "@heroicons/react/24/outline";
import InstagramLogo from "../svg/instagramLogo";
import FacebookLogo from "../svg/facebookLogo";

export default function ContactLinks() {
    const contactMethods = [
        {
            Icon: EnvelopeIcon,
            title: "Send an email",
            description:
                "Have any questions or professional enquiries? Send us an email at speleological.association@durham.ac.uk .",
            link: "mailto:zooyoutwo@gmail.com",
            linkText: "Contact us",
        },
        {
            Icon: InstagramLogo,
            title: "Instagram",
            description:
                "See what we've been up to most recently, and our upcoming socials. Send us a message!",
            link: "https://www.instagram.com/dusa_caving/?hl=en",
            linkText: "Follow us on Instagram",
        },
        {
            Icon: FacebookLogo,
            title: "Facebook",
            description:
                "This is the primary way we engage with our ex-members, which is especially helpful for organising gatherings or learning from more experienced people.",
            link: "https://www.facebook.com/groups/DurhamCaving/",
            linkText: "JoinPage our Facebook Page",
        },
    ];

    return (
        <div className="isolate bg-white px-6  sm:py-5 lg:px-8 h-screen">
            <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Get Involved
                </h2>
                <p className="mt-2 text-lg leading-8 text-black">
                    We'll do our best to get back to you ASAP.
                </p>
            </div>
            <div className="mx-auto mt-10 max-w-lg space-y-16">
                {contactMethods.map(
                    ({Icon, title, description, link, linkText}, index) => (
                        <div key={index} className="flex gap-x-6">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                                <Icon className="h-6 w-6" aria-hidden="true"/>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    {title}
                                </h3>
                                <p className="mt-2 leading-7 text-gray-600">{description}</p>
                                <p className="mt-4">
                                    <a
                                        href={link}
                                        className="text-sm font-semibold leading-6 text-indigo-600"
                                    >
                                        {linkText} <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}

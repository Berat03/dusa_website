import { EnvelopeIcon } from '@heroicons/react/24/outline';
import InstagramLogo from './instagramLogo';
import FacebookLogo from './facebookLogo';

export default function ContactLinks() {
  const contactMethods = [
    {
      Icon: EnvelopeIcon,
      title: 'Send an email',
      description: 'Ut cursus est ut amet. Lobortis eget egestas leo vitae eget porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.',
      link: 'mailto:zooyoutwo@gmail.com', // TODO
      linkText: 'Contact us'
    },
    {
      Icon: InstagramLogo,
      title: 'Instagram',
      description: 'Expedita qui non ut quia ipsum voluptatum ipsam pariatur. Culpa vitae ipsum minus eius vero quo quibusdam.',
      link: 'https://www.instagram.com/dusa_caving/?hl=en',
      linkText: 'Report a bug'
    },
    {
      Icon: FacebookLogo,
      title: 'Facebook',
      description: 'Sint aut modi porro consequatur architecto commodi qui consequatur. Dignissimos adipisci minima.',
      link: 'https://www.facebook.com/groups/DurhamCaving/',
      linkText: 'Join our Facebook Page'
    },
  ];

  return (
    <div className="isolate bg-white px-6 py-10 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Involved</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        {contactMethods.map(({ Icon, title, description, link, linkText }, index) => (
          <div key={index} className="flex gap-x-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">{title}</h3>
              <p className="mt-2 leading-7 text-gray-600">
                {description}
              </p>
              <p className="mt-4">
                <a href={link} className="text-sm font-semibold leading-6 text-indigo-600">
                  {linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from "react-router-dom";
import dusa_logo from "../assets/dusa_website_cropped.png"
function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: 'HOME', to: '/' },
  { name: 'TRIP REPORTS', to: '/TripReports' },
  { name: 'NEWS', to: '/News' },
  { name: 'CONTACT US', to: '/ContactUs' },
];

export default function NavBar() {
  return (
    <Disclosure as="nav" className='bg-white' >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-6">
            <div className="flex h-10 items-center justify-between">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src={dusa_logo}
                  alt="Our logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6 flex-1">
                <div className="flex justify-end space-x-1 text-black">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          "rounded-md px-2 py-1 text-sm font-extrabold font-medium",
                          isActive ? "text-white bg-gray-700" : "hover:text-white hover:bg-gray-700"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      "block rounded-md px-3 py-2 font-extrabold text-base font-medium",
                      isActive ? "text-white bg-gray-700" : "hover:text-white hover:bg-gray-700"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}


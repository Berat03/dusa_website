import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

interface NavItem {
  name: string;
  to: string;
}

const navigation: NavItem[] = [
  { name: "CAVING", to: "/NewToCaving" },
  { name: "ARCHIVE", to: "/Blog" },
  { name: "TRIP REPORTS", to: "/TripReports" },
  { name: "JOIN", to: "/Join" },
];

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

// TypeScript component
const NavBar: React.FC = () => {
  // Define the type for the navLinkStyle function
  const navLinkStyle = ({ isActive }: { isActive: boolean }): string =>
    classNames(
      "rounded-md px-2 py-1 text-sm font-extrabold font-medium",
      isActive
        ? "text-white bg-gray-700"
        : "hover:text-white hover:bg-gray-700",
    );

  return (
    <Disclosure as="nav" className="bg-white" style={{ zIndex: 60 }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-6">
            <div className="flex h-10 items-center justify-between">
              {/* Use navLinkStyle for DUSA NavLink */}
              <NavLink
                to={"/"}
                className={({ isActive }) => navLinkStyle({ isActive })}
              >
                DUSA
              </NavLink>
              <div className="hidden sm:block sm:ml-6 flex-1">
                <div className="flex justify-end space-x-1 text-black">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) => navLinkStyle({ isActive })}
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
                  className={({ isActive }) => navLinkStyle({ isActive })}
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
};

export default NavBar;

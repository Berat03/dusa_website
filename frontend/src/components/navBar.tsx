import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {NavLink} from "react-router-dom";

interface NavItem {
    name: string;
    to: string;
}

const navigation: NavItem[] = [
    {name: "CAVING", to: "/caving"},
    {name: "API", to: "/api"},
    {name: "CALENDER", to: "/calender"},
    {name: "GALLERY", to: "/gallery"},
    {name: "BLOG", to: "/blog"},
    {name: "JOIN", to: "/join"},
];

function classNames(...classes: (string)[]): string {
    return classes.filter(Boolean).join(" ");
}

// TypeScript component
const NavBar: React.FC = () => {
    const navLinkStyle = ({isActive}: { isActive: boolean }): string =>
        classNames(
            "rounded-md px-2 py-1 font-medium font-extrabold ",
            isActive
                ? "text-white bg-gray-700 font-extrabold "
                : "hover:text-white hover:bg-gray-700 font-extrabold ",
        );

    return (
        <Disclosure as="nav" className="z-50 bg-brown-900 font-4xl font-extrabold " style={{zIndex: 60}}>
            {({open}) => (
                <>
                    <div className="mx-auto  max-w-7xl px-2 sm:px-3 lg:px-6">
                        <div className="flex 111 items-center justify-between">
                            <NavLink
                                to={"/"}
                                className={({isActive}) => navLinkStyle({isActive})}
                            >
                                DUSA
                            </NavLink>
                            <div className="hidden sm:block font-extrabold sm:ml-6 flex-1">
                                <div className="flex justify-end space-x-1 text-black font-extrabold">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className={({isActive}) => navLinkStyle({isActive})}
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                            <div className="-mr-2 flex sm:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden ">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={({isActive}) => navLinkStyle({isActive})}
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

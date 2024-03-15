// TabBar.tsx
import React from 'react';

type Tab = {
  name: string;
  href: string;
  current: boolean;
};

type TabBarProps = {
  onTabSelect: (tabName: string) => void;
};

const tabs: Tab[] = [
  { name: 'Gallery', href: '#', current: true },
  { name: 'Blog', href: '#', current: false },
  { name: 'Calender', href: '#', current: false },
  { name: 'Members & Links', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function TabBar({ onTabSelect }: TabBarProps) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current)?.name}
          onChange={(e) => onTabSelect(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => onTabSelect(tab.name)}
                className={classNames(
                  tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TabBar;

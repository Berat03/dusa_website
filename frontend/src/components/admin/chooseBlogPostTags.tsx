import React, { useState } from 'react';

const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' },
];

export default function ChooseBlogPostTags() {

  const [selectedSides, setSelectedSides] = useState(new Set<number | null>());

  const handleChange = (sideId: number | null) => {
    const newSelectedSides = new Set(selectedSides);
    if (newSelectedSides.has(sideId)) {
      newSelectedSides.delete(sideId);
    } else {
      if (sideId === null) {
        newSelectedSides.clear();
      } else {
        newSelectedSides.delete(null);
      }
      newSelectedSides.add(sideId);
    }
    setSelectedSides(newSelectedSides);
  };


  return (
    <fieldset>
      <legend className="text-base font-semibold text-gray-900">Select sides</legend>
      <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        {sides.map((side) => (
          <div key={side.id} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`side-${side.id}`} className="select-none font-medium text-gray-900">
                {side.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`side-${side.id}`}
                name={`side-${side.id}`}
                type="checkbox"
                checked={selectedSides.has(side.id)}
                onChange={() => handleChange(side.id)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

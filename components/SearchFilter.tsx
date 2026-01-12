'use client';

import React, { useState } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  ageMin?: number;
  ageMax?: number;
  priceMin?: number;
  priceMax?: number;
  activities?: string[];
  location?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ageMin, setAgeMin] = useState(0);
  const [ageMax, setAgeMax] = useState(18);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(5000);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const activities = ['Sports', 'Arts', 'STEM', 'Adventure', 'Music', 'Drama', 'Outdoor', 'Leadership'];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleActivityToggle = (activity: string) => {
    const updated = selectedActivities.includes(activity)
      ? selectedActivities.filter(a => a !== activity)
      : [...selectedActivities, activity];
    setSelectedActivities(updated);
    applyFilters({ activities: updated });
  };

  const applyFilters = (overrides?: Partial<FilterOptions>) => {
    const filters: FilterOptions = {
      ageMin,
      ageMax,
      priceMin,
      priceMax,
      activities: selectedActivities,
      ...overrides,
    };
    onFilter(filters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Your Perfect Camp</h2>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by camp name or location..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Age Range</h3>
          <div className="space-y-2">
            <div>
              <label className="text-sm text-gray-600">Min: {ageMin}</label>
              <input
                type="range"
                min="0"
                max="18"
                value={ageMin}
                onChange={(e) => {
                  setAgeMin(Number(e.target.value));
                  applyFilters({ ageMin: Number(e.target.value) });
                }}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Max: {ageMax}</label>
              <input
                type="range"
                min="0"
                max="18"
                value={ageMax}
                onChange={(e) => {
                  setAgeMax(Number(e.target.value));
                  applyFilters({ ageMax: Number(e.target.value) });
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
          <div className="space-y-2">
            <div>
              <label className="text-sm text-gray-600">Min: ${priceMin}</label>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceMin}
                onChange={(e) => {
                  setPriceMin(Number(e.target.value));
                  applyFilters({ priceMin: Number(e.target.value) });
                }}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Max: ${priceMax}</label>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceMax}
                onChange={(e) => {
                  setPriceMax(Number(e.target.value));
                  applyFilters({ priceMax: Number(e.target.value) });
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-3">Activities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {activities.map((activity) => (
            <button
              key={activity}
              onClick={() => handleActivityToggle(activity)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                selectedActivities.includes(activity)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {activity}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

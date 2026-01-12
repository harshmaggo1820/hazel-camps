import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockCamps, locations, ageGroups } from '../lib/mockData';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const filteredCamps = mockCamps.filter(camp => {
    const matchQuery = camp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       camp.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchLocation = !selectedLocation || camp.location === selectedLocation;
    const matchAgeGroup = !selectedAgeGroup || camp.ageGroup === selectedAgeGroup;
    const matchPrice = camp.price >= priceRange[0] && camp.price <= priceRange[1];
    return matchQuery && matchLocation && matchAgeGroup && matchPrice;
  });

  return (
    <div>
      <Head><title>Search Camps - MSQ RC</title></Head>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Search Summer Camps</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <input
              type="text"
              placeholder="Search camps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none"
            />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none"
            >
              <option value="">All Locations</option>
              {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none"
            >
              <option value="">All Age Groups</option>
              {ageGroups.map(ag => <option key={ag} value={ag}>{ag}</option>)}
            </select>
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="px-4 py-2"
            />
          </div>

          <p className="text-gray-600 mb-6">Found {filteredCamps.length} camps</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCamps.map(camp => (
              <div key={camp.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">{camp.name}</h2>
                <p className="text-gray-600 text-sm mb-3">{camp.description}</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Age:</strong> {camp.ageGroup}</p>
                  <p><strong>Location:</strong> {camp.location}</p>
                  <p><strong>Price:</strong> ${camp.price}</p>
                  <p><strong>Availability:</strong> {camp.enrolled}/{camp.capacity}</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;

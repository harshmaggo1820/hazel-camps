'use client';

import React from 'react';
import Link from 'next/link';
import { Camp } from '../lib/types';

interface CampCardProps {
  camp: Camp;
}

const CampCard: React.FC<CampCardProps> = ({ camp }) => {
  const averageRating = camp.reviews ? 
    (camp.reviews.reduce((sum, r) => sum + r.rating, 0) / camp.reviews.length).toFixed(1) : 
    0;
  const reviewCount = camp.reviews?.length || 0;

  return (
    <Link href={`/camps/${camp.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden h-full">
        <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 h-48 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">{camp.name.charAt(0)}</div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{camp.name}</h3>
          
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-700 font-semibold">{averageRating}</span>
            <span className="text-gray-500 text-sm ml-1">({reviewCount})</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{camp.description}</p>
          
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            <div><span className="font-semibold">Location:</span> {camp.location}</div>
            <div><span className="font-semibold">Age:</span> {camp.ageRange.min}-{camp.ageRange.max} years</div>
            <div><span className="font-semibold">Price:</span> ${camp.pricing.basePrice}</div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {camp.activities.slice(0, 3).map((activity, idx) => (
              <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {activity}
              </span>
            ))}
            {camp.activities.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                +{camp.activities.length - 3} more
              </span>
            )}
          </div>
          
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CampCard;

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const camps = [
    { id: 1, name: 'Adventure Summer Camp', ageGroup: '8-14', location: 'Atlanta', activities: 'Hiking, Archery' },
    { id: 2, name: 'Tech Camp Georgia', ageGroup: '10-17', location: 'Peachtree', activities: 'Coding, Robotics' },
    { id: 3, name: 'Arts & Music Camp', ageGroup: '6-13', location: 'Downtown', activities: 'Music, Painting' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Hazel Camps - Find Your Perfect Summer Camp</title>
      </Head>
      
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Hazel Camps</h1>
          <p className="text-xl opacity-90">Find the perfect summer camp experience for your child</p>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {camps.map((camp) => (
            <Link href="/" key={camp.id}>
              <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">{camp.name}</h2>
                <p className="text-gray-600"><strong>Age Group:</strong> {camp.ageGroup}</p>
                <p className="text-gray-600"><strong>Location:</strong> {camp.location}</p>
                <p className="text-gray-600 mb-4"><strong>Activities:</strong> {camp.activities}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Learn More</button>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

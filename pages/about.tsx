'use client';

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>About MSQ RC - Summer Camp Finder</title>
        <meta name="description" content="Learn more about MSQ RC and our mission to connect families with the perfect summer camp experiences." />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About MSQ RC</h1>
            <p className="text-gray-600 text-lg mb-6">
              MSQ RC is dedicated to connecting families with exceptional summer camp experiences that enrich children's lives through outdoor adventure, skill development, and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To make it easy for families to find and book the perfect summer camp that matches their child's interests, age, and preferences. We believe every child deserves a memorable, enriching summer experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading platform for summer camp discovery and booking, empowering families to make informed decisions and create lasting memories that shape children's futures.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose MSQ RC?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Comprehensive Camp Database</h3>
                  <p className="text-gray-600">Access a curated selection of quality summer camps with detailed information about programs, activities, and pricing.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Advanced Search & Filtering</h3>
                  <p className="text-gray-600">Find camps by age group, activity type, location, price range, and more with our powerful search tools.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Parent Reviews</h3>
                  <p className="text-gray-600">Read honest reviews from other parents to make informed decisions about which camp is right for your child.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Easy Booking</h3>
                  <p className="text-gray-600">Simple and secure booking process to get your child registered at their dream camp.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg border-2 border-blue-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Find Your Perfect Camp?</h2>
            <p className="text-gray-600 mb-6">Explore our collection of amazing summer camps and start your adventure today!</p>
            <a href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Browse Camps
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;

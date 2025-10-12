import React from 'react'
import { Helmet } from 'react-helmet-async'
import industriesData from '../data/industries.json'

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve - Lord V Services</title>
        <meta name="description" content="Explore the industries we serve with our security and facility management solutions." />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We provide specialized security and facility management solutions across various industries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.industries.map((industry) => (
              <div key={industry.id} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="text-sm text-blue-600 font-semibold">
                  {industry.projects} Projects Completed
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Industries

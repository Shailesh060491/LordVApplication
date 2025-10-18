import React from 'react'
import { Helmet } from 'react-helmet-async'
import industriesData from '../data/industries.json'

const Industries = () => {
  const getIndustryImage = (industryName) => {
    const industryImages = {
      'Hospitality': '/assets/industries/Hospitality.png',
      'Education': '/assets/industries/Education.jpg',
      'Healthcare': '/assets/industries/HealthCare.jpg',
      'Retail & Commercial': '/assets/industries/Retail_Commercial1.jpg',
      'Industrial & Manufacturing': '/assets/industries/Industrial_Manufacturing.png'
    }
    return industryImages[industryName] || industryImages['Hospitality']
  }

  return (
    <>
      <Helmet>
        <title>Industries We Serve - Lord V Services</title>
        <meta name="description" content="Explore the industries we serve with our security and facility management solutions." />
      </Helmet>

      <section className="relative text-white py-20" style={{
        backgroundImage: `url('/assets/industries/Retail_Commercial1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <div key={industry.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={getIndustryImage(industry.name)} 
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="text-sm text-blue-600 font-semibold">
                    {industry.projects} Projects Completed
                  </div>
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

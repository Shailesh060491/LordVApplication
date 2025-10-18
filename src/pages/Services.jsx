import React from 'react'
import { Helmet } from 'react-helmet-async'
import ServiceCard from '../components/ServiceCard.jsx'
import servicesData from '../data/services.json'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Lord V Services</title>
        <meta name="description" content="Comprehensive facility management, housekeeping, security, garden maintenance, contract labor, event management, and consulting services for businesses." />
      </Helmet>

      <section className="relative text-white py-20" style={{
        backgroundImage: `url('/assets/services/WhyChooseUs.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive facility management, housekeeping, security, garden maintenance, contract labor, event management, and consulting solutions to help your business maintain safe, clean, and efficient operations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions across multiple service categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Technical Services</h3>
              <p className="text-gray-600 mb-4">
                Trained security guards, bouncers, and technical maintenance personnel with modern equipment and safety compliance.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Security & Technical Staff</li>
                <li>• Event Management Staffing</li>
                <li>• Consulting & Compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Facility & Property Management</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive property upkeep, repair, operations, and compliance management for residential and commercial sites.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Facility and Property Management</li>
                <li>• Garden Maintenance</li>
                <li>• Contract Labor Supply</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Housekeeping & Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Routine cleaning and hygiene maintenance using eco-friendly products with trained and uniformed housekeeping staff.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Housekeeping Services</li>
                <li>• Deep Cleaning & Maintenance</li>
                <li>• Eco-friendly Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

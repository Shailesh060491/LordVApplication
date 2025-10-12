import React from 'react'
import { Helmet } from 'react-helmet-async'
import siteData from '../data/site.json'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - {siteData.brand}</title>
        <meta name="description" content="Learn more about Lord V Services and our team of professional web developers." />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lord V Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Leading security and facility management provider empowering businesses with comprehensive support services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Lord V Services is a leading security and facility management company with over 15 years of experience in delivering 
              comprehensive support services to businesses across various industries.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of trained security personnel, facility managers, and support staff work together 
              to help organizations maintain safe, clean, and efficient operations. We provide 24/7 support 
              and ensure business continuity through our professional services.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We specialize in security services, facility management, housekeeping, electronic security, 
              third-party outsourcing, asset management, soft services, and cash management, serving clients from 
              small businesses to large corporations.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

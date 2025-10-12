import React from 'react'
import { Helmet } from 'react-helmet-async'

const Clients = () => {
  const clientTestimonials = [
    {
      id: 1,
      name: "Wipro Limited",
      industry: "IT Services",
      testimonial: "Lord V Services has been managing our corporate campus security and facility operations for over 4 years. Their professional approach and round-the-clock support have been outstanding.",
      project: "Corporate Campus Management",
      rating: 5,
      services: ["Security Services", "Facility Management", "Housekeeping"]
    },
    {
      id: 2,
      name: "Max Healthcare",
      industry: "Healthcare",
      testimonial: "The housekeeping and security services provided by Lord V Services maintain the highest hygiene standards required for healthcare facilities. Their trained staff is exceptional.",
      project: "Hospital Management",
      rating: 5,
      services: ["Housekeeping", "Security Services", "Soft Services"]
    },
    {
      id: 3,
      name: "Godrej Properties",
      industry: "Real Estate",
      testimonial: "Complete facility management for our premium residential and commercial properties. Lord V Services ensures our residents receive world-class services with 24/7 support.",
      project: "Property Management",
      rating: 5,
      services: ["Facility Management", "Security Services", "Maintenance"]
    },
    {
      id: 4,
      name: "HDFC Bank",
      industry: "Banking",
      testimonial: "Professional security services including cash management and armed escort for our branches. Lord V Services provides reliable protection for our banking operations.",
      project: "Banking Security",
      rating: 5,
      services: ["Security Services", "Cash Management", "Electronic Security"]
    },
    {
      id: 5,
      name: "Medanta Hospital",
      industry: "Healthcare",
      testimonial: "Comprehensive housekeeping and security services that meet international healthcare standards. Lord V Services understands the critical requirements of medical facilities.",
      project: "Healthcare Facility Management",
      rating: 5,
      services: ["Housekeeping", "Security Services", "Facility Management"]
    },
    {
      id: 6,
      name: "Maruti Suzuki",
      industry: "Manufacturing",
      testimonial: "Industrial facility management including maintenance, security, and housekeeping for our manufacturing plants. Lord V Services provides consistent and reliable support.",
      project: "Industrial Facility Management",
      rating: 5,
      services: ["Facility Management", "Security Services", "Housekeeping"]
    },
    {
      id: 7,
      name: "Kendriya Vidyalaya",
      industry: "Education",
      testimonial: "Complete facility management and security solutions for our educational institutions. Lord V Services ensures a safe and clean learning environment for our students.",
      project: "Educational Institution Management",
      rating: 5,
      services: ["Facility Management", "Security Services", "Housekeeping"]
    },
    {
      id: 8,
      name: "Phoenix MarketCity",
      industry: "Retail",
      testimonial: "Comprehensive services for our shopping malls including security, housekeeping, and facility management. Lord V Services maintains high operational standards consistently.",
      project: "Mall Management",
      rating: 5,
      services: ["Security Services", "Housekeeping", "Facility Management"]
    }
  ]

  const clientLogos = [
    { name: "Wipro", industry: "IT Services" },
    { name: "Max Healthcare", industry: "Healthcare" },
    { name: "Godrej", industry: "Real Estate" },
    { name: "HDFC", industry: "Banking" },
    { name: "Medanta", industry: "Healthcare" },
    { name: "Maruti Suzuki", industry: "Manufacturing" },
    { name: "KV", industry: "Education" },
    { name: "Phoenix", industry: "Retail" }
  ]

  return (
    <>
      <Helmet>
        <title>Our Clients - Lord V Services</title>
        <meta name="description" content="Meet our satisfied clients and read testimonials from leading organizations we serve." />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Trusted by leading organizations across various industries for our security and facility management services.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to serve some of India's most respected companies and institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{client.name}</div>
                  <div className="text-xs text-gray-500">{client.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTestimonials.map((client) => (
              <div key={client.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                    <p className="text-sm text-blue-600">{client.industry}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 mb-4 italic">"{client.testimonial}"</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Project: {client.project}</div>
                  <div className="flex flex-wrap gap-1">
                    {client.services.map((service, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Distribution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients span across various industries and sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
              <div className="text-gray-600">Corporate Offices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">28</div>
              <div className="text-gray-600">Healthcare Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">35</div>
              <div className="text-gray-600">Educational Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">32</div>
              <div className="text-gray-600">Other Industries</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients
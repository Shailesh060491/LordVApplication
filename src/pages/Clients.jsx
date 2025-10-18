import React from 'react'
import { Helmet } from 'react-helmet-async'

const Clients = () => {
  const clientTestimonials = [
    {
      id: 1,
      name: "Deputy Secretary – Shivaji Nagar",
      industry: "Government",
      testimonial: "Professional facility management services that maintain the highest standards of cleanliness and security for our government office.",
      project: "Government Office Management",
      rating: 5,
      services: ["Facility Management", "Security Services", "Housekeeping"],
      logo: "/assets/clients/Deputy_Secretary_Shivaji_Nagar.jpg"
    },
    {
      id: 2,
      name: "Director – Shivaji Nagar",
      industry: "Government",
      testimonial: "Excellent housekeeping and security services that ensure a clean and safe working environment for our staff.",
      project: "Director Office Management",
      rating: 5,
      services: ["Housekeeping", "Security Services", "Facility Management"],
      logo: "/assets/clients/Director_Shivaji_Nagar.jpg"
    },
    {
      id: 3,
      name: "Dnyanganga English Medium School – Sinhgad",
      industry: "Education",
      testimonial: "Outstanding facility management services that create a safe and clean environment for our students and staff.",
      project: "School Facility Management",
      rating: 5,
      services: ["Facility Management", "Housekeeping", "Security Services"],
      logo: "/assets/clients/Dnyanganga_English_Medium_School_Sinhgad.jpg"
    },
    {
      id: 4,
      name: "Silver Crest English Medium School",
      industry: "Education",
      testimonial: "Professional housekeeping and maintenance services that keep our school premises clean and well-maintained.",
      project: "School Maintenance Services",
      rating: 5,
      services: ["Housekeeping", "Maintenance", "Security Services"],
      logo: "/assets/clients/Silver_Crest_English_Medium_School.jpg"
    },
    {
      id: 5,
      name: "IndoGlobal Softsolution & Technologies Pvt. Ltd.",
      industry: "Technology",
      testimonial: "Comprehensive facility management for our IT company with 24/7 support and professional staff.",
      project: "Corporate Office Management",
      rating: 5,
      services: ["Facility Management", "Security Services", "Housekeeping"],
      logo: "/assets/clients/IndoGlobal.jpg"
    },
    {
      id: 6,
      name: "Zeal College of Engineering and Research",
      industry: "Education",
      testimonial: "Excellent security and housekeeping services that maintain a clean and secure environment for our college campus.",
      project: "College Facility Management",
      rating: 5,
      services: ["Security Services", "Housekeeping", "Facility Management"],
      logo: "/assets/clients/Zeal.jpg"
    },
    {
      id: 7,
      name: "Government Polytechnic Avasari Khurd",
      industry: "Education",
      testimonial: "Professional facility management services that ensure our polytechnic college maintains high standards of cleanliness and security.",
      project: "Polytechnic College Management",
      rating: 5,
      services: ["Facility Management", "Security Services", "Housekeeping"],
      logo: "/assets/clients/Avsari_polytecnic.jpg"
    },
    {
      id: 8,
      name: "Dassault System – Hinjewadi",
      industry: "Technology",
      testimonial: "Comprehensive facility management for our corporate office with 24/7 support and professional staff.",
      project: "Corporate Office Management",
      rating: 5,
      services: ["Facility Management", "Security Services", "Housekeeping"],
      logo: "/assets/clients/Dassault.jpg"
    },
    {
      id: 9,
      name: "Smart Work Eq43 – Balewadi",
      industry: "Technology",
      testimonial: "Professional facility management services that maintain a clean and productive environment for our co-working space.",
      project: "Co-working Space Management",
      rating: 5,
      services: ["Facility Management", "Housekeeping", "Security Services"],
      logo: "/assets/clients/Smart_Work.jpg"
    },
    {
      id: 10,
      name: "DIT Education Foundation (Wellington College)",
      industry: "Education",
      testimonial: "Excellent housekeeping and security services that create a safe and clean environment for our students and staff.",
      project: "School Facility Management",
      rating: 5,
      services: ["Housekeeping", "Security Services", "Facility Management"],
      logo: "/assets/clients/Wellignton.jpg"
    },
    {
      id: 11,
      name: "Eon IT WeWork – Koregaon Park",
      industry: "Technology",
      testimonial: "Professional facility management services that maintain a clean and productive environment for our WeWork space.",
      project: "Co-working Space Management",
      rating: 5,
      services: ["Facility Management", "Housekeeping", "Security Services"],
      logo: "/assets/clients/wework.jpg"
    }
  ]

  const clientLogos = [
    { name: "Deputy Secretary", industry: "Government", logo: "/assets/clients/Deputy_Secretary_Shivaji_Nagar.jpg" },
    { name: "Director", industry: "Government", logo: "/assets/clients/Director_Shivaji_Nagar.jpg" },
    { name: "Dnyanganga School", industry: "Education", logo: "/assets/clients/Dnyanganga_English_Medium_School_Sinhgad.jpg" },
    { name: "Silver Crest", industry: "Education", logo: "/assets/clients/Silver_Crest_English_Medium_School.jpg" },
    { name: "IndoGlobal", industry: "Technology", logo: "/assets/clients/IndoGlobal.jpg" },
    { name: "Zeal College", industry: "Education", logo: "/assets/clients/Zeal.jpg" },
    { name: "Polytechnic", industry: "Education", logo: "/assets/clients/Avsari_polytecnic.jpg" },
    { name: "Dassault", industry: "Technology", logo: "/assets/clients/Dassault.jpg" },
    { name: "Smart Work", industry: "Technology", logo: "/assets/clients/Smart_Work.jpg" },
    { name: "Wellington", industry: "Education", logo: "/assets/clients/Wellignton.jpg" },
    { name: "WeWork", industry: "Technology", logo: "/assets/clients/wework.jpg" }
  ]

  return (
    <>
      <Helmet>
        <title>Our Clients - Lord V Services</title>
        <meta name="description" content="Meet our satisfied clients and read testimonials from leading organizations we serve." />
      </Helmet>

      <section className="relative text-white py-20" style={{
        backgroundImage: `url('/assets/clients/IndoGlobal.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden mx-auto mb-3 shadow-md">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
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
                  <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
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
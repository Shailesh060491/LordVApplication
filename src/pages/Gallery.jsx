import React from 'react'
import { Helmet } from 'react-helmet-async'

const Gallery = () => {
  const galleryProjects = [
    {
      id: 1,
      title: "Security Services",
      description: "Professional security solutions with trained personnel and modern equipment for comprehensive protection.",
      category: "Security",
      image: "/assets/services/Security.jpg",
      features: ["24/7 Security", "Trained Guards", "Modern Equipment"]
    },
    {
      id: 2,
      title: "Housekeeping Services",
      description: "Professional housekeeping services with eco-friendly products and trained uniformed staff.",
      category: "Housekeeping",
      image: "/assets/services/Housekeeping1.jpg",
      features: ["Daily Cleaning", "Eco-friendly Products", "Trained Staff"]
    },
    {
      id: 3,
      title: "Facility Management",
      description: "Comprehensive facility management including property upkeep, operations, and compliance management.",
      category: "Facility Management",
      image: "/assets/services/facility_property_management.jpg",
      features: ["Property Upkeep", "Operations Management", "Compliance"]
    },
    {
      id: 4,
      title: "Event Management",
      description: "Professional event management staffing with skilled manpower for planning, coordination, and crowd management.",
      category: "Event Management",
      image: "/assets/services/Event_Management.jpg",
      features: ["Event Planning", "Crowd Management", "Professional Staff"]
    },
    {
      id: 5,
      title: "Garden Maintenance",
      description: "Professional garden maintenance services including landscaping, trimming, and outdoor upkeep.",
      category: "Garden Maintenance",
      image: "/assets/services/GardenManagement.jpg",
      features: ["Landscaping", "Trimming", "Outdoor Upkeep"]
    },
    {
      id: 6,
      title: "Contract Labor Supply",
      description: "Skilled and unskilled labor supply on contract basis for various operational needs with competitive pricing.",
      category: "Labor Supply",
      image: "/assets/services/ContractLabourSupply.jpg",
      features: ["Skilled Labor", "Unskilled Labor", "Contract Services"]
    },
    {
      id: 7,
      title: "Consulting Services",
      description: "Expert advisory and compliance management under EPF, ESI, Minimum Wages Act, and labor laws with documentation assistance.",
      category: "Consulting",
      image: "/assets/services/Consulting.jpg",
      features: ["Compliance Management", "Documentation", "Expert Advisory"]
    },
    {
      id: 8,
      title: "Housekeeping Excellence",
      description: "Advanced housekeeping services with eco-friendly products and professional uniformed staff for various facilities.",
      category: "Housekeeping",
      image: "/assets/services/Housekeeping2.jpg",
      features: ["Eco-friendly Products", "Professional Staff", "Quality Service"]
    },
    {
      id: 9,
      title: "Comprehensive Housekeeping",
      description: "Complete housekeeping solutions including daily cleaning, sanitization, and waste management for all types of facilities.",
      category: "Housekeeping",
      image: "/assets/services/Housekeeping3.jpg",
      features: ["Daily Cleaning", "Sanitization", "Waste Management"]
    }
  ]

  const categories = ["All", "Security", "Housekeeping", "Facility Management", "Event Management", "Garden Maintenance", "Labor Supply", "Consulting"]

  return (
    <>
      <Helmet>
        <title>Gallery - Lord V Services</title>
        <meta name="description" content="View our portfolio of security, housekeeping, and facility management projects." />
      </Helmet>

      <section className="relative text-white py-20" style={{
        backgroundImage: `url('/assets/services/facility_property_management.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our portfolio of successful security, housekeeping, and facility management projects.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="space-y-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Project Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence in service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">180+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Security Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">70+</div>
              <div className="text-gray-600">Housekeeping Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">60+</div>
              <div className="text-gray-600">Facility Management</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
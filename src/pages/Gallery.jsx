import React from 'react'
import { Helmet } from 'react-helmet-async'

const Gallery = () => {
  const galleryProjects = [
    {
      id: 1,
      title: "Corporate Office Security",
      description: "Complete security solution for a major IT company including manned guards and electronic security systems.",
      category: "Security",
      image: "/assets/gallery/security-1.jpg",
      features: ["24/7 Security", "Access Control", "CCTV Surveillance"]
    },
    {
      id: 2,
      title: "Hospital Housekeeping",
      description: "Professional housekeeping services for a leading healthcare facility with strict hygiene protocols.",
      category: "Housekeeping",
      image: "/assets/gallery/housekeeping-1.jpg",
      features: ["Daily Cleaning", "Sanitization", "Waste Management"]
    },
    {
      id: 3,
      title: "Educational Campus Management",
      description: "Complete facility management for a prestigious educational institution including maintenance and security.",
      category: "Facility Management",
      image: "/assets/gallery/facility-1.jpg",
      features: ["Building Maintenance", "Security Services", "Soft Services"]
    },
    {
      id: 4,
      title: "Banking Security Solutions",
      description: "Advanced security systems for a major bank including cash management and armed escort services.",
      category: "Security",
      image: "/assets/gallery/security-2.jpg",
      features: ["Cash Management", "Armed Security", "Electronic Systems"]
    },
    {
      id: 5,
      title: "Manufacturing Facility",
      description: "Industrial facility management including maintenance, security, and housekeeping services.",
      category: "Facility Management",
      image: "/assets/gallery/facility-2.jpg",
      features: ["Industrial Maintenance", "Security Guards", "Cleaning Services"]
    },
    {
      id: 6,
      title: "Residential Complex",
      description: "Complete facility management for a premium residential complex with 24/7 support services.",
      category: "Facility Management",
      image: "/assets/gallery/facility-3.jpg",
      features: ["Property Management", "Security Services", "Maintenance"]
    },
    {
      id: 7,
      title: "Shopping Mall Services",
      description: "Comprehensive services for a large shopping mall including security, housekeeping, and facility management.",
      category: "Multi-Service",
      image: "/assets/gallery/mall-1.jpg",
      features: ["Security Services", "Housekeeping", "Facility Management"]
    },
    {
      id: 8,
      title: "Office Complex Housekeeping",
      description: "Professional housekeeping services for a modern office complex with daily cleaning and maintenance.",
      category: "Housekeeping",
      image: "/assets/gallery/housekeeping-2.jpg",
      features: ["Daily Cleaning", "Deep Cleaning", "Maintenance Support"]
    },
    {
      id: 9,
      title: "Data Center Security",
      description: "High-security solutions for a critical data center including access control and monitoring systems.",
      category: "Security",
      image: "/assets/gallery/security-3.jpg",
      features: ["Access Control", "24/7 Monitoring", "Emergency Response"]
    }
  ]

  const categories = ["All", "Security", "Housekeeping", "Facility Management", "Multi-Service"]

  return (
    <>
      <Helmet>
        <title>Gallery - Lord V Services</title>
        <meta name="description" content="View our portfolio of security, housekeeping, and facility management projects." />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                className="px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
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
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">
                      {project.category === "Security" && "🛡️"}
                      {project.category === "Housekeeping" && "🧹"}
                      {project.category === "Facility Management" && "🏢"}
                      {project.category === "Multi-Service" && "🔧"}
                    </div>
                    <p className="text-sm opacity-80">Project Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
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
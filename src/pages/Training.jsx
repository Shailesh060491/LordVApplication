import React from 'react'
import { Helmet } from 'react-helmet-async'

const Training = () => {
  const trainingPrograms = [
    {
      id: 1,
      title: "Security Guard Training",
      description: "Comprehensive training program for security personnel including basic security principles, emergency response, and customer service.",
      duration: "2 weeks",
      level: "Beginner to Intermediate",
      price: "₹5,000",
      features: ["Basic Security Training", "Emergency Response", "Customer Service", "Legal Compliance"]
    },
    {
      id: 2,
      title: "Housekeeping Excellence",
      description: "Professional housekeeping training covering cleaning techniques, hygiene standards, and safety protocols.",
      duration: "1 week",
      level: "Beginner",
      price: "₹3,000",
      features: ["Cleaning Techniques", "Hygiene Standards", "Safety Protocols", "Equipment Handling"]
    },
    {
      id: 3,
      title: "Facility Management",
      description: "Complete facility management training including maintenance procedures, vendor management, and operational efficiency.",
      duration: "3 weeks",
      level: "Intermediate to Advanced",
      price: "₹8,000",
      features: ["Maintenance Procedures", "Vendor Management", "Operational Efficiency", "Budget Management"]
    },
    {
      id: 4,
      title: "Electronic Security Systems",
      description: "Training on electronic security systems including CCTV operation, access control systems, and alarm management.",
      duration: "2 weeks",
      level: "Intermediate",
      price: "₹6,000",
      features: ["CCTV Operation", "Access Control", "Alarm Systems", "System Maintenance"]
    },
    {
      id: 5,
      title: "Cash Management & Security",
      description: "Specialized training for cash handling, transportation security, and armed escort procedures.",
      duration: "2 weeks",
      level: "Advanced",
      price: "₹10,000",
      features: ["Cash Handling", "Transport Security", "Armed Escort", "Risk Assessment"]
    },
    {
      id: 6,
      title: "Soft Services Training",
      description: "Training for reception services, concierge duties, and administrative support functions.",
      duration: "1 week",
      level: "Beginner",
      price: "₹2,500",
      features: ["Reception Services", "Concierge Duties", "Administrative Support", "Customer Relations"]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Training Programs - Lord V Services</title>
        <meta name="description" content="Professional training programs for security, housekeeping, and facility management personnel." />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Training Programs</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Professional training programs to enhance skills in security, housekeeping, and facility management.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to ensure excellence in service delivery and safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-700">Duration:</span>
                      <span className="text-blue-600">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-700">Level:</span>
                      <span className="text-gray-600">{program.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-700">Price:</span>
                      <span className="text-green-600 font-bold">{program.price}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our training programs are designed to meet industry standards and ensure excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Certified</h3>
              <p className="text-gray-600 text-sm">Certified training programs meeting industry standards and regulations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600 text-sm">Experienced professionals with years of industry experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Training</h3>
              <p className="text-gray-600 text-sm">Hands-on training with real-world scenarios and equipment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600 text-sm">Industry-recognized certificates upon successful completion</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Training
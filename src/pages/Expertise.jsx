import React from 'react'
import { Helmet } from 'react-helmet-async'

const Expertise = () => {
  return (
    <>
      <Helmet>
        <title>Our Expertise - Lord V Services</title>
        <meta name="description" content="Learn about Lord V Services expertise in security and facility management with experienced ex-servicemen and trained personnel." />
        <meta name="keywords" content="security expertise, ex-servicemen, trained personnel, security services, facility management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-20" style={{
        backgroundImage: `url('/assets/Expertise_Payrole/expertise.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Professional security and facility management expertise backed by experienced ex-servicemen and rigorous training.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Expertise
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our expertise originates from our experience gained in large National security agencies, the armed forces and the police. Majority of our staff are ex-servicemen, who have performed similar task during their devoted and distinguished career. Our security personnel are equipped with proper uniform and accouterments.
                </p>
                
                <p>
                  Our personnel undergo rigorous training about their duties and responsibilities and are the best in the industry. We take full responsibility of the personnel who are verified by Police from the concern Police Station.
                </p>
              </div>

              {/* Key Features */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Ex-Servicemen</h3>
                  </div>
                  <p className="text-gray-700">Majority of our staff are ex-servicemen with distinguished careers in armed forces and police.</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Rigorous Training</h3>
                  </div>
                  <p className="text-gray-700">Our personnel undergo comprehensive training about duties and responsibilities.</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Police Verification</h3>
                  </div>
                  <p className="text-gray-700">All personnel are verified by Police from the concerned Police Station.</p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Professional Equipment</h3>
                  </div>
                  <p className="text-gray-700">Our security personnel are equipped with proper uniform and accouterments.</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:order-first">
              <div className="relative">
                <img
                  src="/assets/Expertise_Payrole/expertise.jpg"
                  alt="Our Expertise - Security and Facility Management"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional security and facility management expertise backed by years of experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Trained Personnel</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Police Verified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Our Expertise?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about our professional security and facility management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918412087700"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call +91 8412087700
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise

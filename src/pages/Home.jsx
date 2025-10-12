import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
// import servicesData from '../data/services.json'
// import clientsData from '../data/clients.json'
// import siteData from '../data/site.json'

const Home = () => {
  // Temporary test data
  const featuredServices = [
    { id: 1, title: "Security Services", description: "Comprehensive security solutions with manned guarding and access control", icon: "security", features: ["Manned Guards", "Access Control"], price: "₹15,000/month" },
    { id: 2, title: "Facility Management", description: "Complete facility management including maintenance and utilities", icon: "facility", features: ["Building Maintenance", "Utilities Management"], price: "₹25,000/month" },
    { id: 3, title: "Housekeeping Services", description: "Professional cleaning and sanitization services", icon: "housekeeping", features: ["Daily Cleaning", "Sanitization"], price: "₹8,000/month" }
  ]
  const featuredClients = [
    { id: 1, name: "Wipro Limited", industry: "IT Services", testimonial: "Excellent security and facility management services. Lord V Services has been our trusted partner for over 4 years.", project: "Corporate Campus Management" },
    { id: 2, name: "Max Healthcare", industry: "Healthcare", testimonial: "Professional housekeeping and security services that maintain the highest hygiene and safety standards.", project: "Hospital Management" },
    { id: 3, name: "Godrej Properties", industry: "Real Estate", testimonial: "Comprehensive facility management for our premium residential and commercial properties with 24/7 support.", project: "Property Management" }
  ]

  return (
    <>
      <Helmet>
        <title>Lord V Services - Security & Facilities Management Solutions</title>
        <meta name="description" content="Leading provider of comprehensive security services, facility management, housekeeping, and asset management solutions" />
      </Helmet>

      <Hero />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cost-effective management that keeps your facility running smoothly.
              </h2>
              <Link
                to="/about"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                Learn More
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">35+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Professional Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-gray-600">Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">7+</div>
                <div className="text-gray-600">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Security Services Company India
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Lord V Services is a built-up Security Company in India and is into security and facility management services. At Lord V we provide "one-stop innovative total property solutions." We have an honorable spot in the market to offer the best security and facility management service in India. With an extensive experience of over 35 years, our Security Services in India are validated and allowed by Government. We provide you with all kinds of security and housekeeping-related services like Electronic security services, Bouncers, Female Security Guards, housekeepers, facility managers, Soft facility management, and so on. All enormous MNCs, BPOs, Commercial Hubs, Real Estate Sites, and Residential Complexes go under our client list. You can likewise enlist us for shopping malls, ATMs, Banks, emergency clinics, individual firms, events, etc.
            </p>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Get in touch with our expert team
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Services</option>
                <option>Security Services</option>
                <option>Housekeeping Services</option>
                <option>Facility Management</option>
                <option>Electronic Security</option>
                <option>Third-Party Outsourcing</option>
                <option>Asset Management</option>
                <option>Soft Services</option>
                <option>Cash Management</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Detailed Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Lord V security services our guards are immensely trained to deal with any kind of security circumstances, whether it is controlling a massive crowd or handling a threatening case, our skilled guardsmen are always ready to manage the situation. Moreover, they are equipped with the latest technology and safety instruments to use in critical situations. We are a security company in India with skillful employees who are aware of using all types of modern equipped instruments. All of our guards possess the knowledge of self-defense techniques that are considered an essential part of the security service.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lord V security services are committed to providing the best Security Services in India with a strong team working 24X7, just for you. We have a team of extremely knowledgeable and qualified managers who have created a pre-determined plan to conquer any requirements of the customers. They always have a strategy to solve any problem effortlessly without panic. We aim to provide a secure environment to our customers by providing them with the best housekeeping services.
              </p>
              <Link
                to="/about"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn more
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR VISION</h3>
                <p className="text-gray-600">To be the leading provider of comprehensive security and facility management solutions across India.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR VALUES</h3>
                <p className="text-gray-600">Integrity, professionalism, and commitment to excellence in every service we provide.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR MISSION</h3>
                <p className="text-gray-600">To ensure safety, security, and operational excellence for all our clients through innovative solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lord V Group specializes in providing the following services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {service.icon === "security" && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {service.icon === "facility" && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {service.icon === "housekeeping" && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-blue-600 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WHAT OUR CUSTOMERS SAY
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <p className="text-lg text-gray-700 italic mb-6">
                "Some of the finer nuances are never seen in any of the classical textbooks, and your simple yet practical tips had made the subject easily comprehensible to all of us."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  YP
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Yogesh Parekh</div>
                  <div className="text-gray-600">CEO, Alpha Software LLP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chat with an expert</h3>
              <p className="text-gray-600 mb-4">We would be happy to answer your questions</p>
              <a href="tel:+918412087700" className="text-blue-600 hover:text-blue-700 font-semibold">
                +91 8412087700
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drop a Line</h3>
              <p className="text-gray-600 mb-4">Feel free to share your comments</p>
              <a href="mailto:info@lordvservices.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                info@lordvservices.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit our Office</h3>
              <p className="text-gray-600 mb-4">You are most welcome to visit our office in New Delhi</p>
              <p className="text-gray-600">New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              We provide a high quality, tailored facility management service.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We'll take care of building space planning, sustainability, compliance and safety, and operations and maintenance requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect Us</h3>
                <p className="mb-2">Tel: +91 8412087700</p>
                <p>Email: info@lordvservices.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">What We Do</h3>
                <p>Security Services • Housekeeping • Facility Management • Electronic Security • Third-Party Outsourcing • Asset Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
// import servicesData from '../data/services.json'
// import clientsData from '../data/clients.json'
// import siteData from '../data/site.json'

const Home = () => {
  // Form state for Get in Touch section
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in Name, Email, and Phone fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.location, // Using location as company
          service: formData.service,
          message: `Quick inquiry from Home page - Service: ${formData.service}, Location: ${formData.location}`,
          to_email: EMAILJS_CONFIG.TO_EMAIL
        }
      )
      
      console.log('Email sent successfully:', result)
      alert('Thank you for your inquiry! We will get back to you soon.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: ''
      })
      
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send message. Please try again or contact us directly at support@lordvservices.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Services data from documentation
  const featuredServices = [
    { id: 1, title: "Facility and Property Management", description: "Comprehensive property upkeep, repair, operations, and compliance management for residential and commercial sites.", icon: "facility", features: ["Property upkeep & inspections", "Daily operations", "Compliance audits", "Vendor coordination"], price: "Contact for Quote" },
    { id: 2, title: "Housekeeping Services", description: "Routine cleaning and hygiene maintenance using eco-friendly products with trained and uniformed staff.", icon: "housekeeping", features: ["Daily cleaning & sanitization", "Waste management", "Deep cleaning", "Eco-friendly materials"], price: "Contact for Quote" },
    { id: 3, title: "Security & Technical Staff", description: "Trained security guards, bouncers, and technical maintenance personnel with modern equipment.", icon: "security", features: ["24/7 security services", "Trained guards & bouncers", "Technical staff", "Safety compliance"], price: "Contact for Quote" }
  ]
  const featuredClients = [
    { id: 1, name: "Deputy Secretary - Shivaji Nagar", industry: "Government", testimonial: "Professional facility management services that maintain the highest standards of cleanliness and security.", project: "Government Office Management" },
    { id: 2, name: "Dnyanganga English Medium School", industry: "Education", testimonial: "Excellent housekeeping and security services that create a safe and clean environment for our students.", project: "School Facility Management" },
    { id: 3, name: "Dassault System - Hinjewadi", industry: "Technology", testimonial: "Comprehensive facility management for our corporate office with 24/7 support and professional staff.", project: "Corporate Office Management" }
  ]

  return (
    <>
      <Helmet>
        <title>Lord V Services - Trusted Facility Management & Labor Services Across Pune</title>
        <meta name="description" content="Leading facility management and labor services company based in Pune, Maharashtra, delivering clean, secure, and efficient solutions to residential, commercial, and industrial clients." />
      </Helmet>

      <Hero />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted Facility Management & Labor Services Across Pune
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Delivering Clean, Secure, and Efficient Solutions to Residential, Commercial, and Industrial Clients
              </p>
              <Link
                to="/about"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                Learn More
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">360</div>
                <div className="text-gray-600">Professional Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">11</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Pan India</div>
                <div className="text-gray-600">Client Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Lord V Services Pvt. Ltd.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Established in 2019 and based in Pune, Maharashtra, Lord V Services Pvt. Ltd. stands as a premier facility management and labor services company committed to delivering exceptional value through comprehensive, integrated solutions. With over six years of dedicated service in the industry, we have built a reputation for reliability, professionalism, and unwavering commitment to client satisfaction.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
              At Lord V Services, we understand that maintaining clean, secure, and efficient environments is essential for the success of any residential, commercial, or industrial establishment. Our mission is to listen and respond to our clients' unique needs, providing high-quality, reliable, and eco-friendly facility and labor management services that set new industry standards.
            </p>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Get in touch with our expert team
            </h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Service</option>
                <option value="Housekeeping">Housekeeping</option>
                <option value="Security">Security</option>
                <option value="Facility">Facility</option>
                <option value="Event Management">Event Management</option>
              </select>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Submit'
                )}
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
                Our skilled workforce is rigorously trained in all aspects of facility management, from routine housekeeping and deep cleaning to specialized maintenance services including marble polishing, garden upkeep, and technical support. We also provide expert security services with trained guards and bouncers equipped with modern safety tools and self-defense expertise.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                What sets us apart is our comprehensive approach to service delivery. Beyond traditional facility management, we offer consulting services to help businesses navigate complex labor laws and optimize workforce management, ensuring compliance with regulations such as EPF, ESI, Minimum Wages Act, and other statutory requirements.
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
                <p className="text-gray-600">Aspirational goal to be the leading facility management company delivering exceptional value.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR VALUES</h3>
                <p className="text-gray-600">Integrity, professionalism, customer focus, continuous improvement.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR MISSION</h3>
                <p className="text-gray-600">Commitment to client needs through high-quality, eco-friendly services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lord V Services specializes in providing the following services
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
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WHAT OUR CEO SAYS
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-center border border-white/30 shadow-lg">
              <p className="text-lg text-gray-700 italic mb-6">
                "Over the past 6 years, we have built Lord V Services with a simple vision - to provide exceptional facility management and security services that our clients can trust. Our team of 360+ professionals, including ex-servicemen, ensures that every client receives the highest quality service. We take pride in our 24/7 support and the peace of mind we provide to our 11+ satisfied clients across Pune."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-lg">
                  <img
                    src="/assets/gallery/Ceo.jpg"
                    alt="Mr. Sahebrao Rautwar - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Mr. Sahebrao Rautwar</div>
                  <div className="text-gray-600">Founder & CEO, Lord V Services Pvt. Ltd.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chat with an expert</h3>
              <p className="text-gray-600 mb-4">We would be happy to answer your questions</p>
              <a href="tel:+919226551568" className="text-blue-600 hover:text-blue-700 font-semibold">
                +91 9226551568
              </a>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drop a Line</h3>
              <p className="text-gray-600 mb-4">Feel free to share your comments</p>
              <a href="mailto:support@lordvservices.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                support@lordvservices.com
              </a>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit our Office</h3>
              <p className="text-gray-600 mb-4">You are most welcome to visit our office in Pune</p>
              <p className="text-gray-600">60 Feet Rd, opp. Amazon Prime, near Bhairavnath Bharat Gas Agency<br />
              Shivneri Colony, Agrasen Nagar Society<br />
              Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              We provide a high quality, tailored facility management service.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We'll take care of building space planning, sustainability, compliance and safety, and operations and maintenance requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect Us</h3>
                <p className="mb-2">Tel: +91 9226551568</p>
                <p>Email: support@lordvservices.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">What We Do</h3>
                <p>Facility Management • Housekeeping • Garden Maintenance • Contract Labor • Security & Technical Staff • Event Management • Consulting & Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

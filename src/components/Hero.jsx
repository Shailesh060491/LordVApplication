import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
// import siteData from '../data/site.json'

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Lord V Services - Professional Web Development</title>
        <meta name="description" content="Professional web development and design services" />
      </Helmet>
      
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Leading Security & Facility
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    Management Solutions
                  </span>
                  Provider
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Comprehensive security services, facility management, housekeeping, and asset management solutions for businesses across India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  View Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">50+</div>
                  <div className="text-blue-200">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">100%</div>
                  <div className="text-blue-200">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">24/7</div>
                  <div className="text-blue-200">Support</div>
                </div>
              </div>
            </div>

            {/* Security & Facility Management Illustration */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Building/Facility Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-200 font-semibold">Professional Services</span>
                  </div>
                  
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/20 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-white text-sm">Security</span>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-white text-sm">Facility</span>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-white text-sm">Housekeeping</span>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="text-white text-sm">Asset Mgmt</span>
                    </div>
                  </div>

                  {/* 24/7 Support Badge */}
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-200 font-semibold text-sm">24/7 Support Available</span>
                    </div>
                  </div>

                  {/* Performance Indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-blue-200 text-sm">
                      <span>Service Excellence</span>
                      <span className="text-green-400">99%</span>
                    </div>
                    <div className="w-full bg-blue-900 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{width: '99%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Security Elements */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-400/30 rounded-full flex items-center justify-center animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400/30 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  )
}

export default Hero

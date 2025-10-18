import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  const getServiceImage = (iconName, serviceTitle) => {
    // Special handling for Deep Cleaning service
    if (serviceTitle === 'Deep Cleaning Services') {
      return '/assets/services/Deep_Cleaning.jpg'
    }
    
    const serviceImages = {
      facility: '/assets/services/facility_property_management.jpg',
      housekeeping: '/assets/services/Housekeeping1.jpg',
      garden: '/assets/services/GardenManagement.jpg',
      labor: '/assets/services/ContractLabourSupply.jpg',
      security: '/assets/services/Security.jpg',
      event: '/assets/services/Event_Management.jpg',
      consulting: '/assets/services/Consulting.jpg'
    }
    return serviceImages[iconName] || serviceImages.facility
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
      <div className="mb-6">
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img 
            src={getServiceImage(service.icon, service.title)} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {service.price}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex space-x-3">
        <Link
          to={`/services/${service.id}`}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
        >
          Get Quote
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard

import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import servicesData from '../data/services.json'

const ServiceDetail = () => {
  const { id } = useParams()
  const service = servicesData.services.find(s => s.id === parseInt(id))

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Lord V Services</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{service.description}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Service Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Features Included:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Pricing:</h3>
                <p className="text-2xl font-bold text-blue-600">{service.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetail

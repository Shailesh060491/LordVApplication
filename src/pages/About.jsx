import React from 'react'
import { Helmet } from 'react-helmet-async'
import siteData from '../data/site.json'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - {siteData.brand}</title>
        <meta name="description" content="Learn more about Lord V Services Pvt. Ltd. - Leading facility management and labor services company based in Pune, Maharashtra." />
      </Helmet>

      <section className="relative text-white py-20" style={{
        backgroundImage: `url('/assets/aboutus/aboutus.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lord V Services Pvt. Ltd.</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Leading facility management and labor services company based in Pune, Maharashtra, delivering clean, secure, and efficient solutions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Lord V Services Pvt. Ltd. is a leading facility management and labor services company based in Pune, Maharashtra, dedicated to providing comprehensive and integrated solutions for residential and commercial properties. Established in 2019, Lord V Services emphasizes quality, reliability, and customer satisfaction with a skilled workforce trained to deliver exceptional housekeeping, deep cleaning, security, technical support, and specialized maintenance services including marble polishing and garden upkeep.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              The company also offers expert consulting to help businesses comply with labor laws and optimize workforce management. Serving diverse clients ranging from educational institutions and hospitality to corporate sectors, Lord V Services is committed to fostering safe, clean, and productive environments while contributing to community employment initiatives with a focus on professionalism and ethical business practices.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our expertise originates from our experience gained in large National security agencies, the armed forces and the police. Majority of our staff are ex-servicemen, who have performed similar task during their devoted and distinguished career. Our security personnel are equipped with proper uniform and accouterments.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our personnel undergo rigorous training about their duties and responsibilities and are the best in the industry. We take full responsibility of the personnel who are verified by Police from the concern Police Station.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are comprised of accomplished leaders from various industries who bring wealth of experience and expertise to guide our organization's strategic direction and decision-making processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder & CEO */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="/assets/gallery/Ceo.jpg" 
                  alt="Mr. Sahebrao Rautwar - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Sahebrao Rautwar</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Committed to upholding our mission & values, playing a vital role in ensuring our long-term success and sustainability.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> ceo@lordvservices.com
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> +91 92265 51564
                </p>
              </div>
            </div>

            {/* Director */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="/assets/gallery/Director.jpg" 
                  alt="Mrs. Shrutika Rautwar - Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mrs. Shrutika Rautwar</h3>
              <p className="text-lg text-green-600 font-semibold mb-4">Director</p>
              <p className="text-gray-600 mb-4">
                With a diverse range of backgrounds and perspectives, fostering innovation and driving progress in our organization.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> admin@lordvservices.com
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> +91 7770012001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

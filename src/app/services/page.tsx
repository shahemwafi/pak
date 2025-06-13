export default function ServicesPage() {
  const services = [
    {
      title: 'Property Buying',
      description: 'Find your dream home in Bahria Town and other prime locations in Lahore.',
      features: [
        'Extensive property listings',
        'Virtual property tours',
        'Expert guidance throughout the buying process',
        'Legal assistance and documentation',
        'Post-purchase support',
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Property Selling',
      description: 'Get the best value for your property with our expert marketing and negotiation.',
      features: [
        'Professional property valuation',
        'Strategic marketing campaigns',
        'High-quality photography and virtual tours',
        'Skilled negotiation on your behalf',
        'Comprehensive legal support',
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Property Renting',
      description: 'Discover rental properties that match your lifestyle and budget.',
      features: [
        'Wide range of rental properties',
        'Tenant screening and verification',
        'Rental agreement preparation',
        'Property maintenance support',
        '24/7 tenant support',
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Investment Services',
      description: 'Make informed real estate investments with our expert guidance.',
      features: [
        'Market analysis and trends',
        'Investment property recommendations',
        'ROI calculations and projections',
        'Portfolio diversification strategies',
        'Regular investment updates',
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                {service.icon}
                <div>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your real estate needs. Our team of experts is ready to
            help you find the perfect property or investment opportunity.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
} 
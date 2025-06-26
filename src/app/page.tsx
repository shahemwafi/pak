// This is a test comment to ensure a new commit is created and picked up by Vercel.
import Image from 'next/image'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'

const featuredProperties = [
  {
    id: '1',
    title: 'Luxury Villa in Bahria Town',
    price: 85000000,
    location: 'Bahria Town, Lahore',
    type: 'residential' as const,
    status: 'for-sale' as const,
    imageUrl: '/images/property1.jpg',
    bedrooms: 5,
    bathrooms: 4,
    area: 5000,
  },
  {
    id: '2',
    title: 'Modern Apartment Complex',
    price: 25000000,
    location: 'DHA Phase 6, Lahore',
    type: 'residential' as const,
    status: 'for-sale' as const,
    imageUrl: '/images/property2.jpg',
    bedrooms: 3,
    bathrooms: 2,
    area: 2000,
  },
  {
    id: '3',
    title: 'Commercial Plaza',
    price: 150000000,
    location: 'Gulberg, Lahore',
    type: 'commercial' as const,
    status: 'for-sale' as const,
    imageUrl: '/images/property3.jpg',
    bedrooms: 0,
    bathrooms: 4,
    area: 8000,
  },
]

const features = [
  {
    title: 'Expert Guidance',
    description: 'Our experienced team provides personalized assistance throughout your real estate journey.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Prime Locations',
    description: 'Access to the most sought-after properties in Bahria Town and other premium areas of Lahore.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Global Reach',
    description: 'Connect with international clients and investors through our extensive network.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/images/my-landing-image.jpg"
          alt="Landing Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container-custom h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Find Your Dream Property in Lahore</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Discover premium properties in Bahria Town and other prime locations. Your trusted
              partner in real estate.
            </p>
            <div className="flex gap-4">
              <Link
                href="/properties"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                View Properties
              </Link>
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/properties"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your real estate needs. Our team of experts is ready to
            help you find the perfect property.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
} 
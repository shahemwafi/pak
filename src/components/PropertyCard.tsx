import Image from 'next/image'
import Link from 'next/link'

interface PropertyCardProps {
  id: string
  title: string
  price: number
  location: string
  type: 'residential' | 'commercial'
  status: 'for-sale' | 'for-rent'
  imageUrl: string
  bedrooms?: number
  bathrooms?: number
  area: number
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  type,
  status,
  imageUrl,
  bedrooms,
  bathrooms,
  area,
  isFeatured = false,
}: PropertyCardProps & { isFeatured?: boolean }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105 relative">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        {isFeatured && (
          <span className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow">Featured</span>
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            status === 'for-sale' ? 'bg-primary text-white' : 'bg-secondary text-white'
          }`}>
            {status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-primary font-bold text-xl mb-4">{formatPrice(price)}</p>

        <div className="flex items-center justify-between text-gray-600">
          {bedrooms && (
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{bedrooms} Beds</span>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{area} sq ft</span>
          </div>
        </div>

        <Link
          href={`/properties/${id}`}
          className="mt-4 block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  )
} 
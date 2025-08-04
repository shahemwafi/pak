'use client'

import { useState } from 'react'
import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link'

// Mock data for properties
const mockProperties = [
  {
    id: '1',
    title: 'Luxury Villa in Bahria Town',
    price: 85000000,
    location: 'Bahria Town, Lahore',
    type: 'residential' as const,
    status: 'for-sale' as const,
    imageUrl: '/images/plaza.png',
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
    imageUrl: '/images/plaza2.png',
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
    imageUrl: '/images/plaza3.png',
    bedrooms: 0,
    bathrooms: 4,
    area: 8000,
  },
]

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [propertyType, setPropertyType] = useState<string>('all')
  const [status, setStatus] = useState<string>('all')

  const filteredProperties = mockProperties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = propertyType === 'all' || property.type === propertyType
    const matchesStatus = status === 'all' || property.status === status

    return matchesSearch && matchesType && matchesStatus
  })

  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Properties</h1>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No properties found matching your criteria.</p>
          </div>
        )}
        <Link href="/admin" className="fixed bottom-8 right-8 z-[100000] bg-blue-600 text-white p-4 rounded-full shadow-lg border-2 border-white hover:bg-blue-800 transition-colors flex items-center justify-center" title="Admin Panel">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 3.75a.75.75 0 01.75 0l1.5.75a.75.75 0 01.38.99l-.38.99a.75.75 0 01-.99.38l-1.5-.75a.75.75 0 01-.38-.99l.38-.99a.75.75 0 01.99-.38zM4.5 9.75a.75.75 0 01.75 0l1.5.75a.75.75 0 01.38.99l-.38.99a.75.75 0 01-.99.38l-1.5-.75a.75.75 0 01-.38-.99l.38-.99a.75.75 0 01.99-.38zM19.5 9.75a.75.75 0 01.75 0l1.5.75a.75.75 0 01.38.99l-.38.99a.75.75 0 01-.99.38l-1.5-.75a.75.75 0 01-.38-.99l.38-.99a.75.75 0 01.99-.38zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
          </svg>
        </Link>
      </div>
    </div>
  )
} 
'use client'

import { useEffect, useRef } from 'react'

interface MapProps {
  center: {
    lat: number
    lng: number
  }
  zoom?: number
}

export default function Map({ center, zoom = 15 }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const initMap = async () => {
      const { Map } = await (window as any).google.maps.importLibrary('maps') as google.maps.MapsLibrary
      
      const map = new Map(mapRef.current!, {
        center,
        zoom,
        styles: [
          {
            featureType: 'geometry',
            elementType: 'all',
            stylers: [
              {
                color: '#f5f5f5',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [
              {
                color: '#e9e9e9',
              },
              {
                lightness: 17,
              },
            ],
          },
        ],
      })

      new (window as any).google.maps.Marker({
        position: center,
        map,
        title: 'Pak Property',
      })
    }

    initMap()
  }, [center, zoom])

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-lg shadow-lg"
    />
  )
} 
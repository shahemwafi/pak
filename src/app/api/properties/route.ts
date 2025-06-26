import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Property from '@/lib/property.model'

export async function GET() {
  await dbConnect()
  const properties = await Property.find({})
  return NextResponse.json(properties)
}

export async function POST(req: NextRequest) {
  await dbConnect()
  const data = await req.json()
  const property = await Property.create(data)
  return NextResponse.json(property)
}

export async function PUT(req: NextRequest) {
  await dbConnect()
  const data = await req.json()
  const { _id, ...update } = data
  const property = await Property.findByIdAndUpdate(_id, update, { new: true })
  return NextResponse.json(property)
}

export async function DELETE(req: NextRequest) {
  await dbConnect()
  const { _id } = await req.json()
  await Property.findByIdAndDelete(_id)
  return NextResponse.json({ success: true })
} 
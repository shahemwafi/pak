import mongoose, { Schema, models } from 'mongoose'

const PropertySchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['residential', 'commercial'], required: true },
  status: { type: String, enum: ['for-sale', 'for-rent'], required: true },
  imageUrl: { type: String, required: true },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  area: { type: Number, required: true },
}, { timestamps: true })

export default models.Property || mongoose.model('Property', PropertySchema) 
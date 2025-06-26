"use client"

import { useEffect, useState } from "react"

interface Property {
  _id?: string
  title: string
  price: number
  location: string
  type: "residential" | "commercial"
  status: "for-sale" | "for-rent"
  imageUrl: string
  bedrooms?: number
  bathrooms?: number
  area: number
}

const emptyProperty: Property = {
  title: "",
  price: 0,
  location: "",
  type: "residential",
  status: "for-sale",
  imageUrl: "",
  bedrooms: 0,
  bathrooms: 0,
  area: 0,
}

export default function AdminPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [form, setForm] = useState<Property>(emptyProperty)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProperties()
  }, [])

  async function fetchProperties() {
    const res = await fetch("/api/properties")
    const data = await res.json()
    setProperties(data)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: name === "price" || name === "area" || name === "bedrooms" || name === "bathrooms" ? Number(value) : value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    if (editingId) {
      await fetch("/api/properties", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _id: editingId }),
      })
    } else {
      await fetch("/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
    }
    setForm(emptyProperty)
    setEditingId(null)
    setLoading(false)
    fetchProperties()
  }

  function handleEdit(property: Property) {
    setForm(property)
    setEditingId(property._id || null)
  }

  async function handleDelete(_id: string | undefined) {
    if (!_id) return
    setLoading(true)
    await fetch("/api/properties", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id }),
    })
    setLoading(false)
    fetchProperties()
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Panel - Manage Properties</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-white p-6 rounded-lg shadow">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded" required />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" required />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" required />
        <select name="type" value={form.type} onChange={handleChange} className="border p-2 rounded">
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <select name="status" value={form.status} onChange={handleChange} className="border p-2 rounded">
          <option value="for-sale">For Sale</option>
          <option value="for-rent">For Rent</option>
        </select>
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" className="border p-2 rounded" required />
        <input name="bedrooms" type="number" value={form.bedrooms} onChange={handleChange} placeholder="Bedrooms" className="border p-2 rounded" />
        <input name="bathrooms" type="number" value={form.bathrooms} onChange={handleChange} placeholder="Bathrooms" className="border p-2 rounded" />
        <input name="area" type="number" value={form.area} onChange={handleChange} placeholder="Area (sq ft)" className="border p-2 rounded" required />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-2" disabled={loading}>{editingId ? "Update" : "Add"} Property</button>
        {editingId && <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-2" onClick={() => { setForm(emptyProperty); setEditingId(null) }}>Cancel</button>}
      </form>
      <h2 className="text-2xl font-bold mb-4">All Properties</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Area</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p) => (
              <tr key={p._id}>
                <td className="p-2 border">{p.title}</td>
                <td className="p-2 border">{p.price}</td>
                <td className="p-2 border">{p.location}</td>
                <td className="p-2 border">{p.type}</td>
                <td className="p-2 border">{p.status}</td>
                <td className="p-2 border">{p.area}</td>
                <td className="p-2 border">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(p)}>Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(p._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 
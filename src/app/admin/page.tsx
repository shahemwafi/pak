"use client"

import { useEffect, useState } from "react"

const ADMIN_PASSWORD = "sufi@786"

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
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState("")
  const [pwError, setPwError] = useState("")

  useEffect(() => {
    if (authed) fetchProperties()
  }, [authed])

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

  function handlePwSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true)
      setPwError("")
    } else {
      setPwError("Incorrect password")
    }
  }

  if (!authed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form onSubmit={handlePwSubmit} className="bg-white p-8 rounded shadow flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter admin password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            className="border p-2 rounded"
          />
          {pwError && <p className="text-red-500">{pwError}</p>}
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Login</button>
        </form>
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Panel - Manage Properties</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-8 rounded-xl shadow mb-8"
      >
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            placeholder="e.g. Luxury Villa in Bahria Town"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Price (PKR)
          </label>
          <input
            type="number"
            placeholder="e.g. 85000000"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            placeholder="e.g. Bahria Town, Lahore"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Type</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value as 'residential' | 'commercial' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
            required
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value as 'for-sale' | 'for-rent' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
            required
          >
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="text"
            placeholder="e.g. /images/property1.jpg or https://..."
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Bedrooms</label>
          <input
            type="number"
            placeholder="e.g. 5"
            value={form.bedrooms}
            onChange={(e) => setForm({ ...form, bedrooms: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Bathrooms</label>
          <input
            type="number"
            placeholder="e.g. 4"
            value={form.bathrooms}
            onChange={(e) => setForm({ ...form, bathrooms: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Area (sq ft)</label>
          <input
            type="number"
            placeholder="e.g. 5000"
            value={form.area}
            onChange={(e) => setForm({ ...form, area: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
            required
          />
        </div>
        <div className="md:col-span-2 flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors"
            disabled={loading}
          >
            {editingId ? 'Update Property' : 'Add Property'}
          </button>
        </div>
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
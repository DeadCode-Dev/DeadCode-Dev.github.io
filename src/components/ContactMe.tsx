"use client";
import { useState } from "react";
import ContactIcons from "./ContactIcons";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.message);
    setLoading(false);

    if (res.ok) {
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="bg-[url('/myprojects.png')] bg-cover bg-primary bg-center min-h-screen w-full flex flex-col items-center px-4 sm:px-6 py-10 text-font-color"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-secondary font-bold mb-12 text-center">
        Contact Me
      </h1>

      <div className="w-full max-w-7xl flex flex-col gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 m-auto"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-font-secondary">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded placeholder:text-white bg-primary-opacity-10 bg-opacity-20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-font-secondary">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded placeholder:text-white bg-primary-opacity-10 bg-opacity-20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          <div className="sm:col-span-2 flex flex-col">
            <label htmlFor="message" className="mb-1 text-font-secondary">
              Message:
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 min-h-[150px] placeholder:text-white rounded bg-primary-opacity-10 bg-opacity-20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded bg-secondary text-white font-semibold shadow-md transition ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-600"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status && (
            <div className="sm:col-span-2 text-right text-green-600 font-medium">
              {status}
            </div>
          )}
        </form>
          <ContactIcons />
      </div>
    </section>
  );
};

export default ContactMe;

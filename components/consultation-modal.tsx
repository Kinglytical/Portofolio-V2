'use client';

import { useState, useEffect } from 'react';
import { FaX } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Initialize EmailJS (replace with your public key)
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

export function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: 'saddamgans18@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
        }
      );
      
      setIsOpen(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      alert('Thank you! Your consultation request has been sent. I will get back to you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send request. Please check your EmailJS configuration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-white/20 hover:bg-white/30 rounded-lg text-white font-bold text-lg transition transform hover:scale-105 backdrop-blur-md"
      >
        Schedule a Consultation
      </button>

      <DialogContent className="w-full max-w-md border-0 bg-[#5a5370] text-white shadow-2xl">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold">
            Schedule a Consultation
          </DialogTitle>
          <p className="text-sm text-gray-200 mt-2">
            Let's discuss your SEO strategy and goals. I'm here to help!
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold mb-2">
              Company/Website
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company Name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Tell me about your goals
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What are your SEO goals? What challenges are you facing?"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-white text-[#5a5370] font-bold rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </button>
            <DialogClose asChild>
              <button
                type="button"
                className="flex-1 px-4 py-2 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition"
              >
                Cancel
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

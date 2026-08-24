'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, MapPin, Loader2, Info } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
    referral: '', // new field
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const services = [
    'AI Automation & Agents',
    'Custom AI Solutions',
    'Web Development',
    'Mobile Apps (iOS/Android)',
    'E-commerce Storefronts',
    'SaaS Development',
    'SEO & Organic Growth',
    'Google/Meta Ads (PPC)',
    'Conversion Optimization'
  ];

  const budgetRanges = [
    '< $5,000',
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000 - $75,050',
    '$75,000+'
  ];

  const referralChannels = [
    'Google Search',
    'Social Media (LinkedIn/X)',
    'Directory Listing (Clutch/DesignRush)',
    'Client Recommendation',
    'Other'
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) tempErrors.phone = 'Phone is required';
    if (selectedServices.length === 0) tempErrors.services = 'Select at least one service';
    if (!selectedBudget) tempErrors.budget = 'Select your budget range';
    if (!formData.referral) tempErrors.referral = 'Please select how you heard about us';
    if (!formData.details.trim()) tempErrors.details = 'Project details are required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget: selectedBudget
        })
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', details: '', referral: '' });
        setSelectedServices([]);
        setSelectedBudget('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-16">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-brand/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-brand/5 blur-[150px] pointer-events-none -z-10" />

      {/* --- PAGE HEADER --- */}
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <Badge variant="cyan">Engagement Hub</Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none text-gradient">
          Let's Build Something Great Together
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          Tell us about your project — whether it's a new app, a website redesign, or a marketing campaign that needs a boost. We'll get back to you within 24 hours with next steps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto w-full">
        {/* --- LEFT DIRECT CONTACT COL --- */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Direct Channels</h2>
            <p className="text-slate-500 dark:text-slate-405 text-xs">Reach out directly if you have specifications sheets or RFP documents ready.</p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <Card hoverable={false} className="flex items-center gap-4 p-4 bg-slate-50/50 dark:bg-white/[0.01]">
              <div className="w-10 h-10 rounded-xl bg-cyan-brand/10 text-cyan-brand flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Email Us</span>
                <a href="mailto:hello@zaamsolutions.com" className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-cyan-brand transition-colors">
                  hello@zaamsolutions.com
                </a>
              </div>
            </Card>

            <Card hoverable={false} className="flex items-center gap-4 p-4 bg-slate-50/50 dark:bg-white/[0.01]">
              <div className="w-10 h-10 rounded-xl bg-purple-brand/10 text-purple-brand flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Call Us</span>
                <a href="tel:+18005550190" className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-purple-brand transition-colors">
                  +1 (800) 555-0190
                </a>
              </div>
            </Card>

            <Card hoverable={false} className="flex items-center gap-4 p-4 bg-slate-50/50 dark:bg-white/[0.01]">
              <div className="w-10 h-10 rounded-xl bg-blue-brand/10 text-blue-brand flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Office Address</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                  San Francisco, CA
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* --- RIGHT CONTACT FORM COL --- */}
        <div className="lg:col-span-8 w-full">
          <Card hoverable={false} className="p-6 md:p-8" borderGlow={true}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Select Services */}
                  <div className="flex flex-col gap-3">
                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                      Required Services
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map(service => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-cyan-brand border-cyan-brand text-white shadow-[0_0_10px_rgba(6,182,212,0.25)]'
                                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/10'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && <span className="text-[10px] text-red-500 font-semibold">{errors.services}</span>}
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-brand transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-brand transition-colors"
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-brand transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-semibold">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Company</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-brand transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="flex flex-col gap-3">
                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {budgetRanges.map(range => {
                        const isSelected = selectedBudget === range;
                        return (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setSelectedBudget(range)}
                            className={`py-2 rounded-lg border text-[10px] font-semibold cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-cyan-brand border-cyan-brand text-white shadow-[0_0_10px_rgba(6,182,212,0.25)]'
                                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/10'
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                    {errors.budget && <span className="text-[10px] text-red-500 font-semibold">{errors.budget}</span>}
                  </div>

                  {/* Referral Channel Selector (New Field) */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="referral" className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                      How did you hear about us?
                    </label>
                    <select
                      id="referral"
                      value={formData.referral}
                      onChange={e => setFormData({ ...formData, referral: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-[#090912] border border-slate-200 dark:border-white/5 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-650 dark:text-slate-300 focus:outline-none focus:border-cyan-brand transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      {referralChannels.map(channel => (
                        <option key={channel} value={channel} className="bg-slate-50 dark:bg-[#030308] text-slate-800 dark:text-slate-200">
                          {channel}
                        </option>
                      ))}
                    </select>
                    {errors.referral && <span className="text-[10px] text-red-500 font-semibold">{errors.referral}</span>}
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="details" className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Project Details</label>
                    <textarea
                      id="details"
                      value={formData.details}
                      onChange={e => setFormData({ ...formData, details: e.target.value })}
                      rows={5}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-brand transition-colors"
                      placeholder="Outline your systems specification needs, conversion growth targets, or timeline objectives..."
                    />
                    {errors.details && <span className="text-[10px] text-red-500 font-semibold">{errors.details}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 bg-gradient-to-r from-cyan-brand via-blue-brand to-purple-brand text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Inquiry Received!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
                    Our lead software systems architect and marketing director are reviewing your details. Expect a reply in under 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </div>
  );
}

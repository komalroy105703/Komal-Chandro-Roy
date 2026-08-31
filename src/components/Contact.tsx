import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Linkedin,
  Facebook,
  Github,
  Instagram,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const { personalInfo } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#34d399', '#38bdf8', '#fbbf24', '#ffffff'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 900);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>

          <h2
            id="contact-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Get In Touch
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Ready to rank #1 in the Google Local 3-Pack, capture AI answer citations, or scale organic revenue? Let's talk today.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Prominent Phone */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* PROMINENT PHONE CARD */}
            <div
              id="prominent-phone-card"
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-emerald-950/30 border border-emerald-500/40 shadow-2xl backdrop-blur-xl group hover:border-emerald-400 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-pulse">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                      Direct Phone / WhatsApp
                    </span>
                    <h3 className="font-heading font-bold text-white text-base">
                      Instant Call Available
                    </h3>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs border border-white/10 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Clickable Phone Number Display */}
              <a
                id="contact-phone-link"
                href={`tel:${personalInfo.phoneRaw}`}
                className="block text-2xl sm:text-3xl font-heading font-extrabold text-white group-hover:text-emerald-300 tracking-tight transition-colors mb-4"
              >
                {personalInfo.phoneNumber}
              </a>

              {/* Call Me Button */}
              <div className="flex gap-3">
                <a
                  id="contact-call-me-btn"
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-emerald-500/25 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Me Now</span>
                </a>

                {personalInfo.socialLinks.whatsapp && (
                  <a
                    id="contact-whatsapp-btn"
                    href={personalInfo.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-white/10 text-xs font-semibold transition-all hover:scale-[1.02]"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* EMAIL CARD */}
            <div
              id="contact-email-card"
              className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:border-emerald-500/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    id="contact-email-link"
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-sky-300 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors ml-2"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LOCATION CARD */}
            <div
              id="contact-location-card"
              className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:border-emerald-500/30 transition-all flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Location & Availability
                </span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {personalInfo.location} (Remote & Worldwide Clients)
                </span>
              </div>
            </div>

            {/* SOCIAL MEDIA LINKS */}
            <div
              id="contact-socials-card"
              className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md"
            >
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-4">
                Connect on Social Networks
              </span>

              <div className="flex flex-wrap gap-2.5">
                <a
                  id="social-link-linkedin"
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-[#0077b5] text-slate-200 hover:text-white border border-white/10 transition-all hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  id="social-link-facebook"
                  href={personalInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-[#1877f2] text-slate-200 hover:text-white border border-white/10 transition-all hover:scale-105"
                  title="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  id="social-link-github"
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/10 transition-all hover:scale-105"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  id="social-link-instagram"
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-[#E4405F] text-slate-200 hover:text-white border border-white/10 transition-all hover:scale-105"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md relative overflow-hidden shadow-2xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-8">
                Fill in the form below and I will get back to you within 24 hours with an audit roadmap.
              </p>

              {isSubmitted ? (
                <div
                  id="contact-form-success-banner"
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span>. Komal Chandro Roy has received your inquiry and will respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2"
                      >
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-600 text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2"
                      >
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@business.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-600 text-sm transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="form-subject"
                      className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Subject / Service Needed
                    </label>
                    <input
                      type="text"
                      id="form-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Local SEO 3-Pack, AEO/GEO AI Citations, Technical Audit"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-600 text-sm transition-all outline-none"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Message Details <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your website, business location, goals, and current search hurdles..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-600 text-sm transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    id="contact-send-message-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                        Transmitting Message...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

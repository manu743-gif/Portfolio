import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, GitBranch, Link2, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'koyiladamanohar11@gmail.com', href: 'mailto:koyiladamanohar11@gmail.com', color: 'text-cyan-400' },
  { icon: <Phone size={20} />, label: 'Phone', value: '7013072977', href: 'tel:7013072977', color: 'text-purple-400' },
  { icon: <GitBranch size={20} />, label: 'GitHub', value: 'github.com/manu743-gif', href: 'https://github.com/manu743-gif', color: 'text-green-400' },
  { icon: <Link2 size={20} />, label: 'LinkedIn', value: 'Koyilada Manohar', href: '#', color: 'text-blue-400' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  const inputClass = "w-full glass rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-cyan-400/60 transition-all duration-200"

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p className="text-center font-mono text-cyan-400 text-sm mb-2" {...fadeUp(0)}>
          {'// get in touch'}
        </motion.p>
        <motion.h2 className="section-title neon-text" {...fadeUp(0.1)}>Contact Me</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.15)}>
          Let's collaborate — I'd love to hear from you!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info Panel */}
          <motion.div {...fadeUp(0.2)}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Whether you have an opportunity, a project idea, or just want to say hello —
                my inbox is always open. I'll get back to you as soon as possible!
              </p>

              <div className="space-y-4">
                {contactInfo.map(c => (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group">
                    <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${c.color} group-hover:scale-110 transition-transform`}>
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">{c.label}</div>
                      <div className="text-sm font-medium group-hover:text-cyan-400 transition-colors">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                <p className="text-sm text-slate-300 font-medium mb-1">💼 Open to Opportunities</p>
                <p className="text-xs text-slate-400">Internships · Full-time roles · Freelance projects</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.25)}>
            <div className="glass rounded-2xl p-8">
              {sent ? (
                <motion.div
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <CheckCircle size={56} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-green-400">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks {form.name}! I'll get back to you soon.</p>
                  <button onClick={() => { setSent(false); setForm({ name:'', email:'', subject:'', message:'' }) }}
                    className="btn-outline mt-6 text-sm py-2">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                      <input id="contact-name" name="name" value={form.name} onChange={handleChange}
                        required placeholder="Manohar" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Email *</label>
                      <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange}
                        required placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                    <input id="contact-subject" name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Project collaboration / Internship offer…" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Message *</label>
                    <textarea id="contact-message" name="message" value={form.message} onChange={handleChange}
                      required rows={5} placeholder="Tell me about your project or opportunity…"
                      className={`${inputClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

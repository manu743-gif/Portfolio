import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Cpu, Globe, Zap } from 'lucide-react'

const stats = [
  { label: 'Projects Built', value: '8+' },
  { label: 'Internships', value: '3' },
  { label: 'Tech Stack', value: '15+' },
  { label: 'Commits', value: '200+' },
]

const highlights = [
  { icon: <GraduationCap size={22} />, title: 'CSE Student', desc: 'Computer Science Engineering — passionate learner' },
  { icon: <Globe size={22} />, title: 'Full Stack Dev', desc: 'Building end-to-end web applications with React & Firebase' },
  { icon: <Cpu size={22} />, title: 'ML Enthusiast', desc: 'Exploring Machine Learning, Data Science & AI tools' },
  { icon: <Zap size={22} />, title: 'Quick Learner', desc: 'Continuously adopting new tech and solving real-world problems' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
      <motion.p className="text-center font-mono text-cyan-400 text-sm mb-2" {...fadeUp(0)}>
        {'// about me'}
      </motion.p>
      <motion.h2 className="section-title neon-text" {...fadeUp(0.1)}>About Me</motion.h2>
      <motion.p className="section-subtitle max-w-2xl mx-auto" {...fadeUp(0.15)}>
        Get to know the developer behind the code
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Bio */}
        <motion.div {...fadeUp(0.2)}>
          <div className="glass rounded-2xl p-8 neon-border">
            <div className="font-mono text-slate-500 text-sm mb-4">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-400">manohar</span>{' '}
              <span className="text-slate-400">= {'{'}</span>
            </div>
            <div className="font-mono text-sm space-y-2 pl-4 mb-4">
              <div><span className="text-purple-300">name</span><span className="text-slate-400">: </span><span className="text-green-400">"Koyilada Manohar"</span>,</div>
              <div><span className="text-purple-300">role</span><span className="text-slate-400">: </span><span className="text-green-400">"Full Stack Developer"</span>,</div>
              <div><span className="text-purple-300">passion</span><span className="text-slate-400">: </span><span className="text-green-400">"ML & Data Science"</span>,</div>
              <div><span className="text-purple-300">phone</span><span className="text-slate-400">: </span><span className="text-green-400">"7013072977"</span>,</div>
              <div><span className="text-purple-300">email</span><span className="text-slate-400">: </span><span className="text-green-400">"koyiladamanohar11@gmail.com"</span>,</div>
              <div><span className="text-purple-300">openToWork</span><span className="text-slate-400">: </span><span className="text-cyan-400">true</span>,</div>
            </div>
            <div className="font-mono text-slate-400 text-sm">{'}'}</div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-slate-300 leading-relaxed">
                I am a passionate Computer Science Engineering student interested in{' '}
                <span className="text-cyan-400 font-semibold">Full Stack Development</span>,{' '}
                <span className="text-purple-400 font-semibold">Machine Learning</span>,{' '}
                <span className="text-pink-400 font-semibold">Data Science</span>, and{' '}
                <span className="text-green-400 font-semibold">Real-Time Applications</span>.
                I enjoy building modern applications, solving real-world problems,
                and continuously learning new technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights + Stats */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div key={h.title} {...fadeUp(0.25 + i * 0.08)}>
                <div className="glass rounded-xl p-4 card-hover h-full">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mb-3">
                    {h.icon}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{h.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats row */}
          <motion.div className="grid grid-cols-4 gap-3" {...fadeUp(0.55)}>
            {stats.map(s => (
              <div key={s.label} className="glass rounded-xl p-4 text-center card-hover">
                <div className="text-2xl font-black neon-text">{s.value}</div>
                <div className="text-slate-500 text-xs mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

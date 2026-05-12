import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(0,212,255,0.3)',
    skills: [
      { name: 'C', level: 75, icon: '⚙️' },
      { name: 'C++', level: 78, icon: '🔧' },
      { name: 'Java', level: 72, icon: '☕' },
      { name: 'Python', level: 88, icon: '🐍' },
      { name: 'JavaScript', level: 85, icon: '🌐' },
    ]
  },
  {
    title: 'Frontend',
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(168,85,247,0.3)',
    skills: [
      { name: 'HTML', level: 92, icon: '🏗️' },
      { name: 'CSS', level: 88, icon: '🎨' },
      { name: 'Tailwind CSS', level: 85, icon: '💨' },
      { name: 'React', level: 82, icon: '⚛️' },
    ]
  },
  {
    title: 'Backend & Database',
    color: 'from-green-400 to-cyan-500',
    glow: 'rgba(52,211,153,0.3)',
    skills: [
      { name: 'Firebase', level: 80, icon: '🔥' },
      { name: 'Supabase', level: 74, icon: '⚡' },
    ]
  },
  {
    title: 'Tools',
    color: 'from-orange-400 to-pink-500',
    glow: 'rgba(251,146,60,0.3)',
    skills: [
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'GitHub', level: 88, icon: '🐙' },
      { name: 'Git', level: 85, icon: '🌿' },
      { name: 'Android Studio', level: 68, icon: '📱' },
    ]
  },
  {
    title: 'Domains',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.3)',
    skills: [
      { name: 'Machine Learning', level: 75, icon: '🤖' },
      { name: 'Data Science', level: 72, icon: '📊' },
      { name: 'Full Stack Dev', level: 82, icon: '🌍' },
      { name: 'Real-Time Apps', level: 78, icon: '⚡' },
    ]
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

function SkillBar({ name, level, icon, color, delay }) {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium flex items-center gap-2">
          <span>{icon}</span> {name}
        </span>
        <span className="text-xs font-mono text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p className="text-center font-mono text-cyan-400 text-sm mb-2" {...fadeUp(0)}>
          {'// technical skills'}
        </motion.p>
        <motion.h2 className="section-title neon-text" {...fadeUp(0.1)}>Skills & Expertise</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.15)}>
          Technologies I work with and love
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              {...fadeUp(0.1 * ci)}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 cursor-pointer transition-all duration-300"
              style={{ boxShadow: active === ci ? `0 0 30px ${cat.glow}` : 'none' }}
              onClick={() => setActive(active === ci ? null : ci)}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} opacity-90 flex items-center justify-center`}>
                  <span className="text-white text-lg font-bold">{cat.title[0]}</span>
                </div>
                <h3 className={`font-bold text-sm bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map((sk, si) => (
                <SkillBar
                  key={sk.name}
                  {...sk}
                  color={cat.color}
                  delay={0.05 * si}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div className="mt-16 text-center" {...fadeUp(0.5)}>
          <h3 className="text-lg font-semibold mb-6 text-slate-300">All Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skillCategories.flatMap(c => c.skills).map(sk => (
              <motion.span
                key={sk.name}
                className="tag"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {sk.icon} {sk.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

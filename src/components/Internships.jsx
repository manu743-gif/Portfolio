import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle, Clock } from 'lucide-react'

const internships = [
  {
    title: 'Python Full Stack Development',
    org: 'AICTE Internship',
    period: '2023',
    status: 'completed',
    desc: 'Developed full-stack web applications using Python, Flask and modern frontend technologies. Worked on real-world projects and gained hands-on industry experience.',
    skills: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'SQL'],
    color: 'from-cyan-500 to-blue-500',
    icon: '🐍',
  },
  {
    title: 'Data Science with Python',
    org: 'Data Science Internship',
    period: '2023 – 2024',
    status: 'completed',
    desc: 'Applied data science techniques including data wrangling, visualization, statistical analysis and machine learning model development using Python libraries.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    color: 'from-purple-500 to-pink-500',
    icon: '📊',
  },
  {
    title: 'IBM SkillsBuild – AI & ML',
    org: 'IBM Internship',
    period: '2024 – Present',
    status: 'ongoing',
    desc: 'Currently pursuing IBM SkillsBuild internship focused on Artificial Intelligence and Machine Learning, building intelligent solutions and deepening AI expertise.',
    skills: ['AI', 'Machine Learning', 'IBM Watson', 'Python', 'Deep Learning'],
    color: 'from-blue-400 to-indigo-500',
    icon: '🤖',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Internships() {
  return (
    <section id="internships" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p className="text-center font-mono text-cyan-400 text-sm mb-2" {...fadeUp(0)}>
          {'// experience'}
        </motion.p>
        <motion.h2 className="section-title neon-text" {...fadeUp(0.1)}>Internships</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.15)}>
          Real-world experience & professional growth
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 hidden md:block" />

          <div className="space-y-8">
            {internships.map((intern, i) => (
              <motion.div
                key={intern.title}
                {...fadeUp(0.15 * i)}
                className="relative md:pl-24 pl-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${intern.color} flex items-center justify-center text-xl shadow-lg`}>
                    {intern.icon}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  className="glass rounded-2xl p-6 card-hover"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className={`text-lg font-bold bg-gradient-to-r ${intern.color} bg-clip-text text-transparent`}>
                        {intern.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <Briefcase size={14} /> {intern.org}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                          <Calendar size={14} /> {intern.period}
                        </span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                      intern.status === 'ongoing'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {intern.status === 'ongoing'
                        ? <><Clock size={12} /> Currently Pursuing</>
                        : <><CheckCircle size={12} /> Completed</>
                      }
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{intern.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {intern.skills.map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

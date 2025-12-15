import { Fragment } from 'react'

export default function Marquee() {
  const skills = [
    'React', 'Vue.js', 'Node.js', 'TypeScript', 'AWS',
    'Next.js', 'Laravel', 'Docker', 'CI/CD', 'GraphQL'
  ]

  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <div className="py-6 md:py-8 bg-neutral-950 text-white overflow-hidden border-y border-white/10 select-none">
      <div className="marquee-track font-mono text-xs md:text-sm uppercase tracking-[0.3em]">
        {duplicatedSkills.map((skill, index) => (
          <Fragment key={`${skill}-${index}`}>
            <span className="mx-4 md:mx-8">{skill}</span>
            <span className="text-white">•</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const skills = ['Java','Python','C','Data Structures & Algorithms','React','JavaScript','FastAPI','REST APIs','SQL / DBMS','Git & GitHub','HTML & CSS','Vite']

export default function Skills() {
  return (
    <section id="skills" className="section" data-reveal>
      <div className="section-heading"><span>02</span><h2>Skills</h2></div>
      <div className="skills-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
    </section>
  )
}

const projects = [
  {
    number: '01',
    title: 'Intelligent Road Traffic Management System (IRTMS)',
    description: 'An intelligent traffic management platform for real-time monitoring, congestion analysis, traffic prediction, route planning, alerts, analytics, and role-based access control.',
    stack: ['React', 'FastAPI', 'Python', 'JWT', 'Leaflet', 'TomTom', 'Docker'],
    github: 'https://github.com/bru-reddy/Intelligent_Road_Traffic_Management_System',
    demo: 'https://intelligent-road-traffic-management-u87d.onrender.com/',
    preview: 'https://intelligent-road-traffic-management-u87d.onrender.com/',
  },
  {
    number: '02',
    title: 'Velora',
    description: 'An AI-powered personalized menu recommendation system that adapts dish recommendations to a user’s mood, diet, budget, cravings, and preferences.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Puter.js', 'Grok', 'Local Storage'],
    github: 'https://github.com/bru-reddy/Velora',
    demo: 'https://bru-reddy.github.io/Velora/',
    preview: 'https://bru-reddy.github.io/Velora/',
  },
]

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.15c-3.18.7-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.54-.29-5.2-1.27-5.2-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.11 1.17a10.8 10.8 0 0 1 5.66 0c2.14-1.48 3.1-1.17 3.1-1.17.63 1.57.24 2.73.12 3.02.74.8 1.18 1.82 1.18 3.07 0 4.41-2.67 5.37-5.22 5.66.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" /></svg>
}

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M14 4h6v6M20 4l-9 9m5 3v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3" /></svg>
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" data-reveal>
      <div className="projects-hero-heading" style={{textAlign:'center',marginBottom:'54px'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'12px',padding:'10px 22px',border:'1px solid rgba(125, 104, 255, .48)',borderRadius:'999px',color:'#bbaeff',fontFamily:"'DM Mono', monospace",fontSize:'.7rem',letterSpacing:'.2em',textTransform:'uppercase',background:'rgba(100, 75, 255, .045)',boxShadow:'0 0 28px rgba(105, 79, 255, .08)'}}><span style={{fontSize:'1rem'}}>⌁</span>Projects</div>
        <h2 style={{margin:'22px 0 12px',fontSize:'clamp(3rem, 6vw, 5rem)',lineHeight:'.95',letterSpacing:'-.075em',background:'linear-gradient(100deg, #f7f7fa 10%, #a99bff 80%)',WebkitBackgroundClip:'text',color:'transparent'}}>Projects</h2>
        <p style={{margin:0,color:'#9696aa',fontSize:'1.05rem'}}>Real-world projects that combine problem-solving, design, and technology.</p>
        <div style={{width:'145px',height:'2px',margin:'25px auto 0',background:'linear-gradient(90deg, transparent, #7465ff, transparent)',boxShadow:'0 0 14px rgba(116,101,255,.8)'}} />
      </div>
      <div className="projects-grid" style={{gridTemplateColumns:'repeat(2, minmax(0, 1fr))',gap:'28px'}}>
        {projects.map((project,index)=>(
          <article className="project-card" key={project.title} data-reveal style={{'--delay':`${index*100}ms`,padding:'26px',minHeight:'0',borderColor:'rgba(93, 91, 185, .48)',borderRadius:'18px'}}>
            <div className="project-topline">
              <span className="project-index" style={{padding:'8px 16px',borderRadius:'999px',background:'rgba(74, 82, 180, .18)',color:'#8e9aff',fontSize:'.75rem'}}>{project.number}</span>
              <span className="project-label" style={{padding:'8px 13px',borderRadius:'999px',border:'1px solid rgba(255,255,255,.08)',background:'rgba(255,255,255,.025)',color:'#aaaab8'}}><span style={{color:'#6ee79b',marginRight:'7px'}}>●</span>Full Stack</span>
            </div>
            <div className="project-preview" style={{position:'relative',marginTop:'18px',aspectRatio:'16 / 9',overflow:'hidden',borderRadius:'15px',border:'1px solid rgba(255,255,255,.12)',background:'#080a10',boxShadow:'0 16px 45px rgba(0,0,0,.28)'}}>
              <div style={{position:'absolute',inset:0,zIndex:2,pointerEvents:'none',background:'linear-gradient(180deg, rgba(7,8,13,.08), transparent 22%, transparent 78%, rgba(7,8,13,.22))'}} />
              <iframe src={project.preview} title={`${project.title} live preview`} loading="lazy" style={{width:'100%',height:'100%',border:0,display:'block',background:'#0b0c12'}} />
            </div>
            <div className="project-content" style={{marginTop:'22px'}}>
              <h3 style={{margin:'0 0 12px',fontSize:'clamp(1.55rem, 2.6vw, 2rem)',lineHeight:'1.08'}}>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack" style={{display:'flex',flexWrap:'wrap',gap:'8px',marginTop:'18px'}}>{project.stack.map(tech=><span key={tech} style={{padding:'7px 12px',borderRadius:'999px',border:'1px solid rgba(92, 105, 210, .35)',background:'rgba(65, 76, 174, .11)',color:'#a9adff',fontFamily:"'Manrope', sans-serif",fontSize:'.68rem'}}>{tech}</span>)}</div>
              <div style={{display:'grid',gridTemplateColumns:project.demo?'1fr 1fr':'1fr',gap:'12px',marginTop:'22px'}}>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',margin:0,minHeight:'48px',border:'1px solid rgba(130,130,170,.45)',borderRadius:'11px',background:'rgba(255,255,255,.012)',fontFamily:"'Manrope', sans-serif",fontSize:'.82rem'}}><GithubIcon />GitHub<span>↗</span></a>
                {project.demo&&<a className="project-link demo-link" href={project.demo} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',margin:0,minHeight:'48px',border:'1px solid rgba(124, 102, 255, .85)',borderRadius:'11px',background:'linear-gradient(135deg, rgba(104,82,255,.3), rgba(73,57,181,.15))',boxShadow:'0 0 24px rgba(103,80,255,.18), inset 0 0 20px rgba(133,110,255,.06)',color:'#d4ceff',fontFamily:"'Manrope', sans-serif",fontSize:'.82rem'}}><ExternalIcon />Live Demo<span>↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

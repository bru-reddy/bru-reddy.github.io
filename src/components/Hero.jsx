export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <div className="hero-status"><span /> Available for opportunities</div>
        <p className="eyebrow">COMPUTER SCIENCE & ENGINEERING</p>
        <h1>Maligireddy<br /><span>Sai Brundha.</span></h1>
        <p className="hero-text">Computer Science student building practical software with a focus on problem solving, development, and continuous learning.</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore Projects <span>↗</span></a>
          <a className="button secondary" href="mailto:maligireddysaibrundha@gmail.com">Contact Me</a>
        </div>
        <div className="social-row">
          <a href="https://github.com/bru-reddy" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/sai-brundha-maligireddy-566566380" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="visual-grid" /><div className="visual-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="visual-card"><span className="visual-kicker">CURRENT FOCUS</span><strong>Software<br />Development</strong><small>Java · Python · DSA · Full Stack</small></div>
      </div>
    </section>
  )
}

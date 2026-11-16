export function ReactTeamHero() {
  return <>
    <section className="section hiring-hero react-team-hero">
      <p className="eyebrow">REACT DEVELOPMENT / MANAGED TEAMS</p>
      <h1>Hire React developers.<br/><em>Bring your product forward.</em></h1>
      <p className="intro-description">Build your next interface with a React developer and project management included. Choose a junior developer and project manager for $20/hour, or a senior developer, technical project manager and professional tester for $50/hour.</p>
      <p className="react-team-description">Whether you are planning a dashboard, improving an existing application or bringing a new product to market, start with a team package that matches the work. Share your requirements with Developerz Hub and define the scope before development begins.</p>
      <div className="brief-actions"><a className="button" href="#hiring-enquiry">Discuss your React project ↗</a><a className="react-plans-link" href="#plans">Compare the two plans ↓</a></div>
      <ul className="react-team-benefits"><li>Two clear hourly plans</li><li>Project management included</li><li>New and existing applications</li></ul>
    </section>
    <section className="section hiring-section react-team-plans" id="plans" aria-labelledby="react-plans-title">
      <p className="eyebrow">CHOOSE YOUR TEAM</p><h2 id="react-plans-title">Two plans. A clear starting point.</h2>
      <div className="react-plan-grid">
        <article><h3>Junior developer team</h3><p className="react-plan-price">$20<span>/hour</span></p><ul><li>Junior React developer</li><li>Project manager included</li></ul><a className="button" href="#hiring-enquiry">Discuss the junior plan ↗</a></article>
        <article><h3>Senior developer team</h3><p className="react-plan-price">$50<span>/hour</span></p><ul><li>Senior React developer</li><li>Technical project manager</li><li>Professional tester</li></ul><a className="button" href="#hiring-enquiry">Discuss the senior plan ↗</a></article>
      </div>
      <p>Share your requirements and define the scope before development begins.</p>
    </section>
  </>;
}
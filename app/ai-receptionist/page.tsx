import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { ServiceSchema } from '@/components/seo';
import ReceptionistEnquiry from '@/components/receptionist-enquiry';
import './receptionist.css';

export const metadata = pageMetadata('/ai-receptionist/');
const capabilities = [
  ['01', 'Answer while you work', 'Plan coverage for busy periods, overflow or after-hours calls, with a greeting that introduces your business and its AI assistant.'],
  ['02', 'Turn calls into enquiries', 'Collect a caller’s name, callback details and reason for calling, then send the information to the person responsible for follow-up.'],
  ['03', 'Handle everyday questions', 'Give the assistant approved answers about your services, opening hours and service area. Route questions outside that information to your team.'],
  ['04', 'Make booking easier', 'Connect an agreed booking workflow so callers can request a suitable time. Calendar availability and booking rules are checked during setup.'],
  ['05', 'Keep people in the loop', 'Set rules for callbacks, transfers and cases that need a human. Decide what happens when your team is unavailable.'],
  ['06', 'Review what needs attention', 'Choose the call summaries, notifications and follow-up details your team needs, with recording and retention settings agreed for your business.'],
];
const faqs = [
  ['What is an AI receptionist?', 'An AI receptionist is a voice assistant configured to handle routine business calls. It follows your approved information and call-handling rules, gathers enquiry details and directs the next step.'],
  ['Can I keep my current business number?', 'We review your current phone provider and routing options first. Forwarding, overflow handling or a separate number may suit your setup; number support and any porting requirements are confirmed before launch.'],
  ['Can it book appointments?', 'Appointment handling can be included where your calendar or booking system supports the required integration. We agree availability rules, confirmation steps and how changes or cancellations reach your team.'],
  ['What if a caller needs a person?', 'We define the topics and conditions that should trigger a transfer or callback request. The fallback depends on your phone system, team availability and the workflow you approve.'],
  ['How much does it cost?', 'The quote depends on call volume, phone coverage, integrations and the amount of custom setup. We separate setup work from ongoing platform, telephone and usage charges so you can review the operating cost before proceeding.'],
  ['How long does setup take?', 'We confirm a schedule after reviewing your phone setup, business information and integrations. The rollout includes sample calls, fallback checks and your approval of the call flow.'],
  ['Can callers tell they are speaking to AI?', 'We include an introduction that identifies the assistant as AI. You approve its greeting and the information it can provide, along with how callers can ask for human help.'],
  ['Will calls be recorded?', 'Recording and transcripts depend on the selected platform and your settings. We agree what information is collected, who can access it, how long it is retained and any required caller notices before launch.'],
];

export default function ReceptionistPage() {
  return <main className="receptionist-page" id="main">
    <ServiceSchema name="AI Receptionist for Small Business" description="Custom AI receptionist setup, call workflows and integrations for small businesses." path="/ai-receptionist/"/>
    <section className="ar-hero ar-wrap">
      <div><p className="eyebrow">AI RECEPTIONIST / SMALL BUSINESS</p><h1>You’re busy.<br/>Your callers<br/><em>still matter.</em></h1>
        <p className="ar-lead">Give your business a helpful first response, even when you can’t pick up.</p>
        <p>Developerz Hub helps you set up an AI receptionist around your business: the questions customers ask, the details you need and the moments that call for a real person.</p>
        <div className="ar-actions"><a href="#enquiry" className="button">Plan your AI receptionist ↗</a><a href="#how-it-works" className="ar-text-link">See how it works ↓</a></div>
        <ul className="ar-trust"><li>Your business, your call flow</li><li>Human handoff by design</li><li>Setup & integration support</li></ul>
      </div>
      <div className="ar-call-scene"><div className="ar-orbit" aria-hidden="true"/><div className="ar-call-card">
        <div className="ar-call-top"><span className="ar-call-icon" aria-hidden="true">↗</span><div><strong>Your front desk, reimagined</strong><small>Illustrative call flow · not a live demo</small></div></div>
        <div className="ar-wave" aria-hidden="true">{[18,32,24,48,66,34,54,80,42,62,30,52,74,38,58,28,44,20].map((height,i)=><i key={i} style={{height,animationDelay:`${i*-.13}s`}}/>)}</div>
        <div className="ar-message"><span>AI ASSISTANT</span><p>Thanks for calling. I’m the business’s AI assistant. How can I help you today?</p></div>
        <div className="ar-message ar-caller"><span>CALLER</span><p>I’d like to arrange a service visit next week.</p></div>
        <div className="ar-message"><span>AI ASSISTANT</span><p>I can take your details and help with the next step. What service do you need?</p></div>
        <div className="ar-call-result"><span aria-hidden="true">✓</span> Enquiry details → your team</div>
      </div><span className="ar-floating-note">A calmer front desk.<br/><strong>A clearer next step.</strong></span></div>
    </section>
    <div className="ar-audience"><span>BUILT AROUND YOUR BUSINESS</span><p>Trades & home services <b>✳</b> Salons & studios <b>✳</b> Local services <b>✳</b> Consultants & small teams</p></div>
    <section className="ar-wrap ar-section" id="capabilities"><div className="ar-section-heading"><p className="eyebrow">LESS PHONE TAG. MORE FOCUS.</p><h2>A better first response.<br/><em>A workflow that fits.</em></h2><p>Choose the call-handling capabilities your business needs. We confirm platform support and integrations as part of the scope.</p></div><div className="ar-feature-grid">{capabilities.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="ar-process-section" id="how-it-works"><div className="ar-wrap ar-section"><div className="ar-section-heading"><p className="eyebrow">FROM FIRST CONVERSATION TO FIRST CALL</p><h2>Make it sound like you.<br/><em>Make it work for you.</em></h2></div><ol className="ar-steps"><li><span>01</span><h3>Map your calls</h3><p>Share your services, hours, common questions and how calls reach you today. We identify what to automate and what stays with your team.</p></li><li><span>02</span><h3>Shape the experience</h3><p>Approve the greeting, answers and escalation rules. We scope connections to your booking tools, inbox or customer system.</p></li><li><span>03</span><h3>Test, then launch</h3><p>Try realistic calls, review the results and check the fallbacks. Go live with the agreed workflow and a clear support arrangement.</p></li></ol></div></section>
    <section className="ar-wrap ar-section ar-scope"><div><p className="eyebrow">A SETUP, NOT A GUESS</p><h2>Start with your needs.<br/><em>Get a clear quote.</em></h2><p>A solo operator handling missed calls needs a different setup from a team with multiple calendars and locations. Tell us where the phone interrupts your day, and we’ll help define the right scope.</p><a href="#enquiry" className="ar-text-link">Let’s map your call flow ↗</a></div><div className="ar-scope-card"><h3>What we clarify before you commit</h3><ul><li>Call volume and when you need coverage</li><li>Phone number, routing and human fallback</li><li>Business knowledge and approved answers</li><li>Calendar, CRM or email integrations</li><li>Setup fee, recurring costs and usage charges</li><li>Testing, launch, support and data settings</li></ul><p>No fixed price is shown until the requirements and running costs are understood.</p></div></section>
    <section className="ar-wrap ar-section ar-faq"><p className="eyebrow">YOUR QUESTIONS, ANSWERED</p><h2>A little clarity<br/><em>before the first call.</em></h2>{faqs.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</section>
    <section className="ar-enquiry-section" id="enquiry"><div className="ar-wrap ar-section ar-enquiry"><div><p className="eyebrow">LET’S TALK ABOUT YOUR CALLS</p><h2>Tell us what<br/>your front desk<br/><em>needs to do.</em></h2><p>Share a little about your business and the calls you want help with. We’ll use your brief to discuss a suitable setup and quote.</p><a className="ar-text-link" href="mailto:info@developerzhub.com">info@developerzhub.com ↗</a></div><ReceptionistEnquiry/></div></section>
    <nav className="ar-wrap ar-related" aria-label="Related services"><span>More ways to build your business</span><Link href="/hire-chatbot-developers/">AI & chatbot development ↗</Link><Link href="/hire-web-developers/">Web development ↗</Link></nav>
  </main>;
}

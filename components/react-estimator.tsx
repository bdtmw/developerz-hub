'use client';

import { useState } from 'react';
import { estimateReactScope } from '@/lib/react-scope';

const plans = {
  junior: { name: 'Junior team', rate: 20, includes: 'Certified React developer + certified project manager' },
  senior: { name: 'Senior team', rate: 50, includes: 'Certified senior React developer + certified technical project manager + certified tester' },
};
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function ReactEstimator() {
  const [selected, setSelected] = useState<keyof typeof plans>('junior');
  const [description, setDescription] = useState('');
  const [manualHours, setManualHours] = useState<string | null>(null);
  const scope = estimateReactScope(description);
  const automatic = manualHours === null;
  const hours = manualHours ?? (scope ? String(scope.suggested) : '');
  const parsed = Number(hours);
  const valid = hours.trim() !== '' && Number.isFinite(parsed) && parsed >= 1 && parsed <= 10000 && Number.isInteger(parsed);
  const plan = plans[selected];
  const budget = (rate: number) => automatic && scope ? `${currency.format(scope.low * rate)}–${currency.format(scope.high * rate)}` : valid ? currency.format(parsed * rate) : '—';
  const hourSummary = automatic && scope ? `${scope.low}–${scope.high} estimated hours` : `${parsed} custom hours`;
  const enquiry = `Hello Developerz Hub,\n\nI would like to discuss a React project.\n\nTeam: ${plan.name}\nIncludes: ${plan.includes}\nHours: ${hourSummary}\nHourly rate: $${plan.rate} USD\nEstimated budget: ${budget(plan.rate)} USD\nEstimate method: ${automatic ? 'Rough feature-based planning range' : 'Visitor-adjusted hours'}\n\nProject requirements:\n${description.trim() || 'To be discussed.'}\n\nPlease help me confirm the scope, hours and start date.`;

  return <div className="react-estimator" aria-labelledby="estimate-title">
    <div className="estimate-inputs">
      <p className="eyebrow">PLAN YOUR BUDGET</p><h3 id="estimate-title">Describe it. Get a starting estimate.</h3>
      <label className="estimate-description-label" htmlFor="estimate-description">Tell us about your project</label>
      <textarea id="estimate-description" name="project-description" rows={5} maxLength={2000} value={description} onChange={event => { setDescription(event.target.value); setManualHours(null); }} placeholder="Example: Build a dashboard with login, editable records, search and an API integration." aria-describedby="estimate-description-help"/>
      <p id="estimate-description-help" className="estimate-help">Hours update as you describe features. Include screens, sign-in, forms, integrations and any existing application changes.</p>
      <fieldset className="estimate-plans"><legend>Choose your managed team</legend>
        {(Object.entries(plans) as [keyof typeof plans, typeof plan][]).map(([key, item]) => <label key={key} className={selected === key ? 'is-selected' : ''}>
          <input type="radio" name="estimate-plan" value={key} checked={selected === key} onChange={() => setSelected(key)}/>
          <span><strong>{item.name} <b>${item.rate}/hr</b></strong><small>{item.includes}</small></span>
        </label>)}
      </fieldset>
      <label className="estimate-hours" htmlFor="estimate-hours">{automatic ? 'Suggested project hours · editable' : 'Your adjusted project hours'}</label>
      <input id="estimate-hours" type="number" min="1" max="10000" step="1" inputMode="numeric" value={hours} onChange={event => setManualHours(event.target.value)} aria-invalid={manualHours !== null && !valid} aria-describedby="estimate-hours-help"/>
      <p id="estimate-hours-help" className="estimate-help">{manualHours !== null && !valid ? 'Enter a whole number from 1 to 10,000 hours.' : automatic ? 'The suggested value is the midpoint of the planning range. Adjusting it switches the budget to your chosen hours.' : 'Budget uses your adjusted hours. Editing the description recalculates the suggestion.'}</p>
      {!automatic && scope && <button type="button" className="estimate-reset" onClick={() => setManualHours(null)}>Use description-based estimate</button>}
    </div>
    <div className="estimate-summary">
      <p className="eyebrow">ESTIMATED PROJECT COST</p>
      <div role="status" aria-live="polite" aria-atomic="true"><p className="estimate-total">{budget(plan.rate)}<span>USD</span></p><p>{valid ? `${hourSummary} · $${plan.rate}/hour` : 'Describe your features to see suggested hours and a budget range.'}</p></div>
      {scope ? <details className="estimate-assumptions"><summary>What the estimate includes</summary><ul>{scope.items.map(item => <li key={item.name}>{item.name}: {item.low}–{item.high} hrs</li>)}</ul><p>Plus a 20% allowance for review, testing and coordination, rounded to four-hour blocks. Features are counted once per category.</p></details> : <p className="estimate-help">Add a few specific features, such as a dashboard, login, forms or API integration. If your scope is unusual, enter your own hours or discuss it with us.</p>}
      <p className="estimate-included">Certified project management included</p>
      <dl className="estimate-comparison"><div><dt>Junior team · $20/hr</dt><dd>{budget(20)}</dd></div><div><dt>Senior team · $50/hr</dt><dd>{budget(50)}</dd></div></dl>
      <p className="estimate-note">This rough estimate uses feature keywords and standard planning allowances. It may misread exclusions or miss complexity. Final scope, hours and start date are confirmed after review. Changing teams changes the rate; it does not assume a different delivery speed.</p>
      {valid ? <a className="button" href={`mailto:info@developerzhub.com?subject=${encodeURIComponent('React project estimate — ' + plan.name)}&body=${encodeURIComponent(enquiry)}`}>Discuss this estimate ↗</a> : <a className="button" href="#hiring-enquiry">Discuss your project ↗</a>}
      <small className="estimate-email-note">{valid ? 'Opens an email draft with your description and estimate.' : 'Get help defining your scope and hours.'}</small>
    </div>
  </div>;
}

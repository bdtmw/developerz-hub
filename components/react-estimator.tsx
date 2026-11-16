'use client';

import { useState } from 'react';

const plans = {
  junior: { name: 'Junior team', rate: 20, includes: 'React developer + project manager' },
  senior: { name: 'Senior team', rate: 50, includes: 'Senior React developer + technical project manager + professional tester' },
};
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

export default function ReactEstimator() {
  const [selected, setSelected] = useState<keyof typeof plans>('junior');
  const [hours, setHours] = useState('40');
  const parsed = Number(hours);
  const valid = hours.trim() !== '' && Number.isFinite(parsed) && parsed >= 1 && parsed <= 10000 && Number.isInteger(parsed);
  const plan = plans[selected];
  const total = valid ? parsed * plan.rate : null;
  const enquiry = total === null ? '' : `Hello Developerz Hub,\n\nI would like to discuss a React project.\n\nTeam: ${plan.name}\nIncludes: ${plan.includes}\nExpected total hours: ${parsed}\nHourly rate: ${currency.format(plan.rate)} USD\nEstimated budget: ${currency.format(total)} USD\n\nProject requirements:\n\nPlease help me confirm the scope, hours and start date.`;

  return <div className="react-estimator" aria-labelledby="estimate-title">
    <div className="estimate-inputs">
      <p className="eyebrow">PLAN YOUR BUDGET</p>
      <h3 id="estimate-title">What could your project cost?</h3>
      <fieldset className="estimate-plans"><legend>Choose your managed team</legend>
        {(Object.entries(plans) as [keyof typeof plans, typeof plan][]).map(([key, item]) => <label key={key} className={selected === key ? 'is-selected' : ''}>
          <input type="radio" name="estimate-plan" value={key} checked={selected === key} onChange={() => setSelected(key)}/>
          <span><strong>{item.name} <b>${item.rate}/hr</b></strong><small>{item.includes}</small></span>
        </label>)}
      </fieldset>
      <label className="estimate-hours" htmlFor="estimate-hours">Expected total project hours</label>
      <input id="estimate-hours" type="number" min="1" max="10000" step="1" inputMode="numeric" value={hours} onChange={event => setHours(event.target.value)} aria-invalid={!valid} aria-describedby="estimate-hours-help"/>
      <p id="estimate-hours-help" className="estimate-help">{valid ? 'Enter total hours for the project, rather than hours per week.' : 'Enter a whole number from 1 to 10,000 hours.'}</p>
      <div className="estimate-presets" aria-label="Suggested hour amounts">{[20, 40, 80, 160].map(value => <button type="button" key={value} aria-pressed={hours === String(value)} onClick={() => setHours(String(value))}>{value} hrs</button>)}</div>
    </div>
    <div className="estimate-summary">
      <p className="eyebrow">ESTIMATED PROJECT COST</p>
      <div role="status" aria-live="polite" aria-atomic="true"><p className="estimate-total">{total === null ? '—' : currency.format(total)}<span>USD</span></p><p>{valid ? `${parsed.toLocaleString('en-US')} hours × $${plan.rate}/hour` : 'Add your expected hours to calculate a budget.'}</p></div>
      <p className="estimate-included">Project management included</p>
      <dl className="estimate-comparison"><div><dt>Junior team · $20/hr</dt><dd>{valid ? currency.format(parsed * 20) : '—'}</dd></div><div><dt>Senior team · $50/hr</dt><dd>{valid ? currency.format(parsed * 50) : '—'}</dd></div></dl>
      <p className="estimate-note">This is a planning estimate based on the hours you enter. Final hours, scope and start date are agreed before development begins.</p>
      {total !== null ? <a className="button" href={`mailto:info@developerzhub.com?subject=${encodeURIComponent('React project estimate — ' + plan.name)}&body=${encodeURIComponent(enquiry)}`}>Discuss this estimate ↗</a> : <span className="estimate-help">Enter valid hours to prepare your enquiry.</span>}
      <small className="estimate-email-note">Opens an email draft with your estimate included.</small>
    </div>
  </div>;
}

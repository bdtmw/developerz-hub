'use client';
import { useState, type FormEvent } from 'react';

export default function ReceptionistEnquiry(){
  const [draft,setDraft]=useState('');
  function prepare(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const fields=new FormData(event.currentTarget);
    setDraft(`AI RECEPTIONIST ENQUIRY — DEVELOPERZ HUB\n\nName: ${fields.get('name')}\nEmail: ${fields.get('email')}\nBusiness: ${fields.get('business')}\nExpected calls per month: ${fields.get('volume')}\n\nCall-handling requirements:\n${fields.get('requirements')}\n\nPlease help me review the setup, integrations and ongoing costs.`);
  }
  return <form className="brief-form ar-form" onSubmit={prepare} onChange={()=>setDraft('')}>
    <div className="form-row"><label>Your name<input name="name" required autoComplete="name" maxLength={100}/></label><label>Work email<input name="email" type="email" required autoComplete="email" maxLength={200}/></label></div>
    <label>Business name & type<input name="business" required maxLength={160} autoComplete="organization" placeholder="e.g. a local plumbing business"/></label>
    <label>Expected calls per month<select name="volume"><option>Not sure yet</option><option>Under 100</option><option>100–500</option><option>500–1,000</option><option>More than 1,000</option></select></label>
    <label>What should your receptionist help with?<textarea name="requirements" required minLength={20} maxLength={2000} rows={5} placeholder="Common enquiries, hours of coverage, booking tools and when a person should take over…"/></label>
    <p className="form-note">Your brief stays in your browser until you choose to send it from your email app. Please leave out customer records and sensitive information.</p>
    <button className="button" type="submit">Prepare my enquiry ↗</button>
    {draft&&<div className="brief-result"><p role="status">Your enquiry is ready. No message has been sent.</p><a className="button" href={`mailto:info@developerzhub.com?subject=${encodeURIComponent('AI Receptionist — Small business enquiry')}&body=${encodeURIComponent(draft)}`}>Review email draft ↗</a><details><summary>View or copy your brief</summary><pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{draft}</pre></details></div>}
  </form>;
}

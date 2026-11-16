'use client';
import {useState,type FormEvent} from 'react';
export default function HiringBrief({stack}:{stack:string}){
 const [draft,setDraft]=useState('');
 function prepare(event:FormEvent<HTMLFormElement>){event.preventDefault();const fields=new FormData(event.currentTarget);setDraft(`Developerz Hub — ${stack} developer enquiry\n\nName: ${fields.get('name')}\nWork email: ${fields.get('email')}\nHiring model: ${fields.get('model')}\n\nProject: ${fields.get('project')}`);}
 return <form className="brief-form hiring-brief" onSubmit={prepare} onChange={()=>setDraft('')}>
  <div className="form-row"><label>Name<input name="name" required autoComplete="name" maxLength={100}/></label><label>Work email<input name="email" type="email" required autoComplete="email" maxLength={200}/></label></div>
  <label>Hiring model<select name="model"><option>Help me choose</option><option>Hourly — discuss terms</option><option>Part-time — discuss terms</option><option>Dedicated — discuss terms</option><option>Fixed-price — discuss scope</option></select></label>
  <label>Project description<textarea name="project" required minLength={20} maxLength={2000}/></label>
  <p className="form-note">Prepared locally. Review the draft in your email app before sending. Do not include passwords or confidential records.</p>
  <button className="button" type="submit">Prepare hiring brief ↗</button>
  {draft&&<div className="brief-result"><p role="status">Your draft is ready. No message has been sent.</p><a className="button" href={`mailto:info@developerzhub.com?subject=${encodeURIComponent(`Hire a ${stack} developer`)}&body=${encodeURIComponent(draft)}`}>Review email draft ↗</a><details><summary>View or copy the prepared brief</summary><pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{draft}</pre></details></div>}
 </form>;
}

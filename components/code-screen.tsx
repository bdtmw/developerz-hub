// Decorative, continuously scrolling code panel used behind the home hero.
const code = `import { brief, team, release, handover } from '@developerz/hub'; // imagine. create. develop.
import { web, mobile, cloud, ai } from '@developerz/stacks';        // design - development - possibility
export async function buildWhatComesNext(idea, { audience = 'yours', budget, deadline } = {}) {
  const scope = await brief.shape(idea, { audience, budget, deadline, mustHave: idea.features });
  const developers = await team.match(scope.stack, { seniority: 'vetted', timezone: scope.overlap });
  for (const milestone of scope.milestones) {                        // one reviewable step at a time
    const build = await developers.build(milestone, { tests: true, accessibility: true, docs: 2 });
    const feedback = await build.review({ with: 'you', on: 'staging', notes: milestone.acceptance });
    if (feedback.approved) await release.ship(build, { rollback: 'ready', monitor: 'first 48 hours' });
    else await developers.revise(build, feedback.changes, { within: scope.revisionRounds });
  }
  return handover.transfer({ code: 'yours', docs: 'complete', ownership: 'client', support: 30 });
}
const stacks = [web.next, web.wordpress, mobile.reactNative, cloud.apis, ai.applications, web.shopify];
const project = await buildWhatComesNext('your next digital product', { audience: 'your customers' });
export const result = { ideas: 'possibilities', craft: 'human', vision: 'yours', delivery: project };
function estimate(scope) { return scope.milestones.reduce((total, step) => total + step.effort, 0); }
const plan = { discover: 'define the problem worth solving', build: 'working software you can review' };
export default async function start() { return brief.open({ plan, stacks, estimate, next: 'your move' }); }
`;

const token = /(\/\/.*$)|('[^']*')|\b(import|from|export|default|async|await|function|const|for|of|if|else|return|true)\b|\b(\d+)\b|\b([A-Za-z_]+)(?=\()/gm;

function highlight(line: string, key: number) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of line.matchAll(token)) {
    if (m.index > last) parts.push(line.slice(last, m.index));
    const cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : m[4] ? 'n' : 'f';
    parts.push(<span key={m.index} className={cls}>{m[0]}</span>);
    last = m.index + m[0].length;
  }
  parts.push(line.slice(last));
  return <div key={key} className="code-line">{parts.length > 1 || parts[0] ? parts : ' '}</div>;
}

export function CodeScreen() {
  const lines = code.split('\n');
  return <div className="code-screen" aria-hidden="true">
    <div className="code-scroll">
      {[0, 1, 2, 3].map(copy => <div key={copy}>{lines.map((line, i) => highlight(line, i))}</div>)}
    </div>
  </div>;
}

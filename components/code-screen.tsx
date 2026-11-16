// Decorative, continuously scrolling code panel used behind the home hero.
const code = `import { brief, team } from '@developerz/hub';

// imagine. create. develop.
export async function buildWhatComesNext(idea) {
  const scope = await brief.shape(idea, { audience: 'yours' });
  const developers = await team.match(scope.stack);

  for (const milestone of scope.milestones) {
    const release = await developers.build(milestone);
    await release.review({ with: 'you' });
    if (release.approved) await release.ship();
  }

  return { ideas: 'possibilities', craft: 'human' };
}

const stacks = ['web', 'mobile', 'cloud', 'ai'];
const project = await buildWhatComesNext('your next product');

// design - development - possibility
function handover(project) {
  const docs = project.document({ depth: 2 });
  return project.transfer({ docs, ownership: 'client' });
}

export const next = handover(project);
`;

const token = /(\/\/.*$)|('[^']*')|\b(import|from|export|async|await|function|const|for|of|if|return)\b|\b(\d+)\b|\b([A-Za-z_]+)(?=\()/gm;

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
      {[0, 1].map(copy => <div key={copy}>{lines.map((line, i) => highlight(line, i))}</div>)}
    </div>
  </div>;
}

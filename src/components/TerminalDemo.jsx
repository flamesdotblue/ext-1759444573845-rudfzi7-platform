import { useEffect, useMemo, useState } from 'react';
import { Copy } from 'lucide-react';

const DEMO_LINES = [
  { type: 'cmd', text: 'agent init --template react --install' },
  { type: 'out', text: '✔ Initialized project with Vite + Tailwind' },
  { type: 'cmd', text: 'agent code --ask "add a responsive navbar and hero"' },
  { type: 'out', text: '⋯ Analyzing project (15 files) ...' },
  { type: 'out', text: '✔ Created components/Navbar.jsx' },
  { type: 'out', text: '✔ Updated App.jsx' },
  { type: 'cmd', text: 'agent test --generate --scope components' },
  { type: 'out', text: '✔ Generated 4 tests • Vitest' },
  { type: 'cmd', text: 'agent review --diff' },
  { type: 'out', text: 'Δ 12 changes • 0 warnings • 0 errors' },
];

function useTicker(lines, speed = 900) {
  const [index, setIndex] = useState(1);
  const sequence = useMemo(() => lines, [lines]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i >= sequence.length ? 1 : i + 1));
    }, speed);
    return () => clearInterval(id);
  }, [sequence, speed]);

  return sequence.slice(0, index);
}

export default function TerminalDemo() {
  const shown = useTicker(DEMO_LINES, 1100);

  const installCmd = 'npm i -g agent-cli';

  return (
    <section id="install" className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-semibold text-white">Get Started in Seconds</h2>
        <p className="mt-2 text-white/70">Install globally and start collaborating with your codebase.</p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-4 flex items-center justify-between rounded-t-lg border border-b-0 border-white/10 bg-white/5 px-4 py-2 text-white/60">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-xs">agent.sh</span>
        </div>
        <div className="rounded-b-lg border border-white/10 bg-black/60 p-4 font-mono text-sm leading-relaxed text-white/90 shadow-2xl ring-1 ring-white/10">
          {shown.map((l, i) => (
            <div key={i} className="whitespace-pre-wrap">
              <span className={l.type === 'cmd' ? 'text-emerald-400' : 'text-white/80'}>
                {l.type === 'cmd' ? '➜ ' : ''}{l.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/5 p-3">
          <code className="block max-w-full truncate font-mono text-white/90">{installCmd}</code>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(installCmd)}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20"
          >
            <Copy className="h-4 w-4" /> Copy
          </button>
        </div>
      </div>
    </section>
  );
}

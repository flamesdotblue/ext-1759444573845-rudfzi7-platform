import { Rocket, Zap, Shield, Settings } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Project Bootstrap',
    desc: 'Scaffold components, routes, and tests with natural language prompts.',
  },
  {
    icon: Zap,
    title: 'Smart Edits',
    desc: 'Applies minimal diffs with context-aware patches and review summaries.',
  },
  {
    icon: Shield,
    title: 'Safe by Default',
    desc: 'Dry-run, approval gates, and reversible changes keep your code safe.',
  },
  {
    icon: Settings,
    title: 'Extensible',
    desc: 'Plugin system for tools like ESLint, Vitest, Playwright, Docker, and more.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Why this Agent CLI</h2>
        <p className="mt-2 text-white/70">Fast, reliable, and designed to fit your terminal workflow.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-violet-600/30 to-blue-600/30 p-3 text-violet-300 ring-1 ring-inset ring-white/10">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="mt-2 text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

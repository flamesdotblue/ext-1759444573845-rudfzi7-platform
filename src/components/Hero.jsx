import Spline from '@splinetool/react-spline';
import { Github, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Experimental Coding Agent CLI
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-violet-200 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl">
          Build faster with an AI Coding Agent CLI
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
          A command-line assistant inspired by Claude Code. Generate, refactor, and navigate codebases with natural language.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-violet-500/25 transition hover:opacity-90"
          >
            <Rocket className="h-5 w-5" />
            Install CLI
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
        <div className="mt-6 rounded-full bg-white/10 px-5 py-2 text-sm text-white/80">
          Try: <code className="font-mono">agent code --ask "create a react hook for web sockets"</code>
        </div>
      </div>
    </section>
  );
}

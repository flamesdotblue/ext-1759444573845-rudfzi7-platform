import { Github, Star } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-white">Agent CLI</h3>
            <p className="text-sm text-white/60">Your coding copilot for the terminal.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:opacity-90"
            >
              <Star className="h-4 w-4" /> Star us
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Agent CLI. Built with React, Vite, and Tailwind.
        </div>
      </div>
    </footer>
  );
}

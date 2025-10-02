import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import TerminalDemo from './components/TerminalDemo';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <main className="relative z-10">
        <FeatureGrid />
        <TerminalDemo />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;

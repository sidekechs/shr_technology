import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Solutions } from '@/components/sections/Solutions';
import { Features } from '@/components/sections/Features';
import { About } from '@/components/sections/About';
import { Pricing } from '@/components/sections/Pricing';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Solutions />
      <Features />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
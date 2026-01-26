
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PreRegisterForm from './components/PreRegisterForm';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-whatsapp/20">
      <Navbar />
      
      <main className="relative">
        <Hero />
        <HowItWorks />
        <PreRegisterForm />
        <Features />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;

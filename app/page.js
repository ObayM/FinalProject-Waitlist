import React from 'react';
import Header from './components/header';
import HeroSection from './components/hero.jsx';
import FeaturesSection from './components/features.jsx';
import CountdownTimer from './components/CountdownTimer.jsx';
import Footer from './components/footer.jsx'
export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <CountdownTimer />
    <Footer />
    </>
  );
}

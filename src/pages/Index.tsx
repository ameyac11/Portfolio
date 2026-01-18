import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HomeNavigation from '@/components/HomeNavigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HomeNavigation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


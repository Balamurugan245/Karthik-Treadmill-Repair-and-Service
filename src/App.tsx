import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} />
      <Hero onBookService={() => setIsBookingOpen(true)} />
      <About />
      <Services onBookService={() => setIsBookingOpen(true)} />
      <Testimonials />
      <Contact />
      <Footer onNavigate={handleNavigate} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;

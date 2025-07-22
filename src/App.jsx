import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import Logos from './components/logos';
import Footer from './components/Footer';
import Ps from './components/ps';
import Cgi from './components/cgi';

function App() {
  return (
    <>
      <Navbar />

      {/* Fixed Mars Background for Hero Only */}
      <div
        style={{
          backgroundImage: "url('/mars.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <Hero />
      </div>
      
      <Ps />
      <Logos />
      <Cgi />

      {/* Additional Sections */}

      
      <Footer />
    </>
  );
}

export default App;
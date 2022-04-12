import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
//import Portfolio from './components/Portfolio';
//import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
          <About></About>
        ) : (
          <ContactForm></ContactForm>
        )
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
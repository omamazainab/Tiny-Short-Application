import React from 'react';
import './App.css';
import Navbar from './components/Navigator';
import Svg1 from './components/Svg1';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid row mx-auto" style={{height:'90vh', backgroundColor: '#0F4848' }}>
        <div className="col-md-12 col-lg-6">
          <h2>Your web presence just got so much better</h2>
          <h5>
            Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an essential sales channel, and it has rules. You need it to survive in the jungle of business.
        </h5>
          <button>WORK WITH US</button>
          <button>VIEW OUR PROJECTS</button>
        </div>
        <div className="col-md-12 col-lg-6">
          <Svg1 />
        </div>
        
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0F4848" fill-opacity="1" d="M0,160L60,186.7C120,213,240,267,360,261.3C480,256,600,192,720,154.7C840,117,960,107,1080,122.7C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

    </div>
  );
}

export default App;

// here is the base js
// import components in like aboutus.js
import React from 'react'; // import React
import './App.css'; // import css
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Nav from './components/Nav';

// create and update App function with some html
// react.fragment makes it easier/efficient to write multiple element
function App() {
  return (
    <React.Fragment>
        <div className='App'>
          <Nav />
          <Hero />
          <AboutUs />
        </div>
    </React.Fragment>
    );
}
// anything in {} is javascript 

export default App;

// A React app consists of various components - a component
// essentially a function that will return HTML output
// The App component is what React app will display when u run it

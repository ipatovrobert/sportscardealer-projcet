import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LatestDeals from './components/LatestDeals';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import CarsState from './context/cars/CarsState';
import Cars from './components/Cars';

function App() {
  return (
    <div className="App">
      <CarsState>
        <Router>
          <Navbar />
            <Switch>

              <Route exact path='/'>
                <News />
                <LatestDeals />
                <Cars />
              </Route>

              <Route exact path='/about'>
                <About />
              </Route>

              <Route exact path='/contact'>
                <Contact />
              </Route>

              <Route exact path='/promotion'>
                gggggggg
              </Route>

            </Switch>
          <Footer />
        </Router>
      </CarsState>
    </div>
  );
}

export default App;

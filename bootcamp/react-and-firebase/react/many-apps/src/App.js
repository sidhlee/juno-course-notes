import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import Footer from './apps/animal-shelter/Footer';

const AnimalShelter = lazy(() => import('./apps/animal-shelter/AnimalShelter'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <span>React Apps</span>
            </Link>
          </div>
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink to="/animal-shelter">AnimalShelter</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          {/* Wait for components to load before rendering. Currently this is the only use case for Suspense */}
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact>
              <section>
                <h1>React Apps</h1>
                <p>Apps created during the class</p>
              </section>
            </Route>
            <Route path="/animal-shelter">
              <AnimalShelter />
            </Route>
          </Suspense>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import styles from './App.module.css'; 
import Spline from "@splinetool/react-spline";
import Link from 'next/link';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <Link href="/"><img src="/public/Logo Green.png" alt="Logo" /></Link>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button>Sign Up</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-image">
        <Spline scene="https://prod.spline.design/IasXXp4pfubC5WHu/scene.splinecode" />
        </div>
        <div className="hero-content">
          <h1>Title</h1>
          <p>Welcome to Culinary Compass, ever interested in trying out our platform?</p>
          <button>Click here to try our prototype now!</button>
        </div>
      </section>

      <section className="sub-banner">
        <div className="sub-banner-content">
          <p>Culinary Compass is an application where you can explore feature recipes or restaurants, save your favourites for later, and search for any meals you desire to get recommended recipes and restaurants</p>
          <Spline scene="https://prod.spline.design/Czks4KswNyduR3JC/scene.splinecode" />
        </div>
      </section>

      <section className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer>
        <p>&copy; Eric Qian</p>
      </footer>
    </div>
  );
}

export default App;

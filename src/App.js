import React, { Suspense } from 'react';
import { Element } from 'react-scroll';
import Loader from './Loader/Loader';
import './style.css';

const Navbar = React.lazy(() => import('./Navbar/Navbar'));
const Hero = React.lazy(() => import('./Hero/Hero'));
const Product = React.lazy(() => import('./Product/Product'));
const Footer = React.lazy(() => import('./Footer/Footer'));
const Team = React.lazy(() => import('./Team'));
const Layanan = React.lazy(() => import('./Layanan/Layanan'));
const Profile = React.lazy(() => import('./Profile'));
const Testimonial = React.lazy(() => import('./Testimonial'));
const Contact = React.lazy(() => import('./Contact'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div style={{ scroll: 'smooth' }}>
          <Navbar />
          <Element className="element" name="section1">
            <Hero />
          </Element>
          <Element className="element" name="section2">
            <Profile />
          </Element>
          <Element className="element" name="section3">
            <Layanan />
          </Element>
          <Element className="element" name="section4">
            <Product />
          </Element>
          <Element className="element" name="section5">
            <Testimonial />
          </Element>
          <Element className="element" name="section6">
            <Team />
          </Element>
          <Element className="element" name="section7">
            <Contact />
          </Element>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;

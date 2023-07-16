import React, { Suspense } from 'react';
import Loader from './Loader/Loader';
const Navbar = React.lazy(() => import('./Navbar/Navbar'));
const Hero = React.lazy(() => import('./Hero/Hero'));
const Product = React.lazy(() => import('./Product/Product'));
const Footer = React.lazy(() => import('./Footer/Footer'));
const Team = React.lazy(() => import('./Team'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Hero />
        <Product />
        <Team />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;

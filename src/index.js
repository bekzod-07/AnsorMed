import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Header, Hero, Services, Cta, Footer} from './components/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <Hero />
      <Services />
      <Cta />
      <Footer />
  </React.StrictMode>
);

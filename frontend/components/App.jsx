import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageMobile from './LandingPageMobile.jsx';
import LandingPageDesktop from './LandingPageDesktop.jsx';
import AboutPageMobile from './AboutPageMobile.jsx';
import AboutPageDesktop from './AboutPageDesktop.jsx';
import useMediaQuery from '../hooks/useMediaQuery.jsx';

export default function App() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isDesktop ? <LandingPageDesktop /> : <LandingPageMobile />} />
        <Route path="/about" element={isDesktop ? <AboutPageDesktop /> : <AboutPageMobile />} />
      </Routes>
    </BrowserRouter>
  )
}


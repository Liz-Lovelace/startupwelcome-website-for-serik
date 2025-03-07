import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageMobile from './LandingPageMobile.jsx';
import LandingPageDesktop from './LandingPageDesktop.jsx';
import AboutPageMobile from './AboutPageMobile.jsx';
import AboutPageDesktop from './AboutPageDesktop.jsx';
import PartnersPage from './PartnersPage.jsx';
import SocialsPage from './SocialsPage.jsx';
import StreamingPlatformsPage from './StreamingPlatformsPage.jsx';
import useMediaQuery from '../hooks/useMediaQuery.jsx';
import { partners } from '../staticData.js';

export default function App() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <BrowserRouter>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={isDesktop ? <LandingPageDesktop /> : <LandingPageMobile />} />
          <Route path="/about" element={isDesktop ? <AboutPageDesktop /> : <AboutPageMobile />} />
          <Route path="/partners" element={<PartnersPage isDesktop={isDesktop} />} />
          <Route path="/socials" element={<SocialsPage isDesktop={isDesktop} />} />
          <Route path="/streaming-platforms" element={<StreamingPlatformsPage isDesktop={isDesktop} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


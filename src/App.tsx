import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MissionValues from './pages/MissionValues';
import VehicleProtection from './pages/services/VehicleProtection';
import Transport from './pages/services/Transport';
import FuelStations from './pages/services/FuelStations';
import Lubricants from './pages/services/Lubricants';
import PartsAccessories from './pages/services/PartsAccessories';
import ContactChannels from './pages/about/ContactChannels';
import PrivacyPolicy from './pages/about/PrivacyPolicy';
import Downloads from './pages/Downloads';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import { useThemeStore } from './store/theme';

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <BrowserRouter>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="font-sans bg-white dark:bg-gray-900 min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missao-valores" element={<MissionValues />} />
            <Route path="/servicos/protecao-veicular" element={<VehicleProtection />} />
            <Route path="/servicos/transportes" element={<Transport />} />
            <Route path="/servicos/postos" element={<FuelStations />} />
            <Route path="/servicos/lubrificantes" element={<Lubricants />} />
            <Route path="/servicos/pecas-acessorios" element={<PartsAccessories />} />
            <Route path="/sobre/canais-atendimento" element={<ContactChannels />} />
            <Route path="/sobre/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

import { createRoot } from 'react-dom/client';
import Berita1 from './Berita/Berita1';
import Berita2 from './Berita/Berita2';

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/berita-1" element={<Berita1 />} />
        <Route path="/berita-2" element={<Berita2 />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

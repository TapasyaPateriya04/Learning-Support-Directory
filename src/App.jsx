import { useState } from 'react';
import Navbar from './components/navbar';
import HomePage from './pages/homePage';
import ProviderDetails from './pages/providerDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchTerm] = useState('');

  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/providers/:id" element={<ProviderDetails />} />
      </Routes>
    </>
  );
}

export default App;

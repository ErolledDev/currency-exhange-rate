import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchExchangeRates } from './api/currency';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CurrencyExchange from './pages/CurrencyExchange';
import CryptoExchange from './pages/CryptoExchange';

const App: React.FC = () => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRates() {
      try {
        const ratesData = await fetchExchangeRates();
        setRates(ratesData);
        setCurrencies(['USD', ...Object.keys(ratesData)]);
      } catch (error) {
        console.error('Failed to load rates:', error);
      } finally {
        setLoading(false);
      }
    }

    loadRates();
    // Refresh rates every 5 minutes
    const interval = setInterval(loadRates, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home currencies={currencies} rates={rates} />} />
          <Route path="/currency" element={<CurrencyExchange rates={rates} />} />
          <Route path="/crypto" element={<CryptoExchange rates={rates} />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About ExchangePro</h3>
                <p className="text-gray-600 text-sm">
                  Leading the way in digital currency exchange with cutting-edge technology and institutional-grade accuracy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Exchange Rates</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/currency" className="text-gray-600 hover:text-blue-600">Currency Exchange</a></li>
                  <li><a href="/crypto" className="text-gray-600 hover:text-blue-600">Crypto Exchange</a></li>
                  <li><a href="/news" className="text-gray-600 hover:text-blue-600">Market News</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
                  <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>123 Financial District</li>
                  <li>New York, NY 10004</li>
                  <li>contact@exchangepro.com</li>
                  <li>+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-gray-600">
              <p>© {new Date().getFullYear()} ExchangePro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
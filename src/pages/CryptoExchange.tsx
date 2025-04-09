import React, { useState } from 'react';
import { Bitcoin, ArrowUpDown, Star } from 'lucide-react';
import SearchCombobox from '../components/SearchCombobox';
import PriceChart from '../components/PriceChart';

interface Props {
  rates: Record<string, number>;
}

const CRYPTOCURRENCIES = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '₿' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ' },
  { id: 'bnb', name: 'Binance Coin', symbol: 'BNB', icon: 'BNB' },
  { id: 'xrp', name: 'Ripple', symbol: 'XRP', icon: 'XRP' },
  { id: 'sol', name: 'Solana', symbol: 'SOL', icon: 'SOL' },
  { id: 'ada', name: 'Cardano', symbol: 'ADA', icon: 'ADA' },
  // Add more cryptocurrencies as needed
];

const CRYPTO_GROUPS = {
  'Top Cryptocurrencies': [
    { symbol: 'BTC', name: 'Bitcoin', icon: '₿' },
    { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ' },
    { symbol: 'BNB', name: 'Binance Coin', icon: 'BNB' },
    { symbol: 'XRP', name: 'Ripple', icon: 'XRP' },
  ],
  'DeFi Tokens': [
    { symbol: 'UNI', name: 'Uniswap', icon: '🦄' },
    { symbol: 'AAVE', name: 'Aave', icon: 'AAVE' },
    { symbol: 'CAKE', name: 'PancakeSwap', icon: '🥞' },
    { symbol: 'COMP', name: 'Compound', icon: 'COMP' },
  ],
  'Metaverse & Gaming': [
    { symbol: 'AXS', name: 'Axie Infinity', icon: 'AXS' },
    { symbol: 'MANA', name: 'Decentraland', icon: 'MANA' },
    { symbol: 'SAND', name: 'The Sandbox', icon: 'SAND' },
    { symbol: 'ENJ', name: 'Enjin Coin', icon: 'ENJ' },
  ],
};

// Generate mock chart data
const generateChartData = () => {
  const data = [];
  const labels = [];
  for (let i = 0; i < 24; i++) {
    data.push(Math.random() * 1000 + 30000);
    labels.push(`${i}:00`);
  }
  return { data, labels };
};

export default function CryptoExchange({ rates }: Props) {
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cryptocurrency Exchange Rates</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Live cryptocurrency prices and market data. Track major cryptocurrencies, DeFi tokens, and more in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <SearchCombobox
                items={CRYPTOCURRENCIES}
                placeholder="Search cryptocurrencies (e.g., BTC, ETH)..."
                onSelect={(crypto) => setSelectedCrypto(crypto)}
              />
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors flex items-center gap-2">
                <ArrowUpDown className="w-5 h-5" />
                Sort by Market Cap
              </button>
              <button className="px-6 py-3 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors flex items-center gap-2">
                <Star className="w-5 h-5" />
                Favorites
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Rates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(CRYPTO_GROUPS).map(([group, cryptos]) => (
          <div key={group} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Bitcoin className="w-6 h-6 text-orange-500" />
              {group}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cryptos.map(({ symbol, name, icon }) => {
                const { data, labels } = generateChartData();
                return (
                  <div
                    key={symbol}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">{icon}</div>
                        <div>
                          <div className="font-semibold">{name}</div>
                          <div className="text-sm text-gray-600">{symbol}</div>
                        </div>
                      </div>
                      <div className="bg-orange-50 px-3 py-1 rounded-full text-orange-600 text-sm font-medium">
                        Live
                      </div>
                    </div>
                    <div className="flex justify-between items-end mb-4">
                      <div className="text-2xl font-bold text-orange-600">
                        ${rates[symbol]?.toFixed(2) || '0.00'}
                      </div>
                      <div className="text-green-500 flex items-center gap-1">
                        +2.45%
                      </div>
                    </div>
                    <PriceChart
                      data={data}
                      labels={labels}
                      color="#ea580c"
                      title={symbol}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
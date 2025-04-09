import React, { useState } from 'react';
import { TrendingUp, ArrowUpDown, Globe2 } from 'lucide-react';
import SearchCombobox from '../components/SearchCombobox';
import PriceChart from '../components/PriceChart';

interface Props {
  rates: Record<string, number>;
}

const CURRENCIES = [
  { id: 'usd-eur', name: 'Euro', symbol: 'EUR', icon: '€' },
  { id: 'usd-gbp', name: 'British Pound', symbol: 'GBP', icon: '£' },
  { id: 'usd-jpy', name: 'Japanese Yen', symbol: 'JPY', icon: '¥' },
  { id: 'usd-chf', name: 'Swiss Franc', symbol: 'CHF', icon: 'Fr' },
  { id: 'usd-aud', name: 'Australian Dollar', symbol: 'AUD', icon: 'A$' },
  { id: 'usd-cad', name: 'Canadian Dollar', symbol: 'CAD', icon: 'C$' },
  // Add more currencies as needed
];

const CURRENCY_GROUPS = {
  'Major Pairs': [
    { from: 'USD', to: 'EUR', name: 'Euro' },
    { from: 'USD', to: 'GBP', name: 'British Pound' },
    { from: 'USD', to: 'JPY', name: 'Japanese Yen' },
    { from: 'USD', to: 'CHF', name: 'Swiss Franc' },
  ],
  'European': [
    { from: 'EUR', to: 'GBP', name: 'Euro to Pound' },
    { from: 'EUR', to: 'CHF', name: 'Euro to Franc' },
    { from: 'EUR', to: 'SEK', name: 'Euro to Krona' },
    { from: 'EUR', to: 'NOK', name: 'Euro to Krone' },
  ],
  'Asian': [
    { from: 'USD', to: 'JPY', name: 'Dollar to Yen' },
    { from: 'USD', to: 'CNY', name: 'Dollar to Yuan' },
    { from: 'USD', to: 'SGD', name: 'Dollar to Singapore' },
    { from: 'USD', to: 'HKD', name: 'Dollar to Hong Kong' },
  ],
};

// Generate mock chart data
const generateChartData = () => {
  const data = [];
  const labels = [];
  for (let i = 0; i < 24; i++) {
    data.push(Math.random() * 0.1 + 1);
    labels.push(`${i}:00`);
  }
  return { data, labels };
};

export default function CurrencyExchange({ rates }: Props) {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Currency Exchange Rates</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real-time exchange rates for major currency pairs worldwide. Track, convert, and stay updated with the latest forex rates.
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
                items={CURRENCIES}
                placeholder="Search currencies (e.g., EUR, GBP)..."
                onSelect={(currency) => setSelectedCurrency(currency)}
              />
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2">
                <ArrowUpDown className="w-5 h-5" />
                Sort by Rate
              </button>
              <button className="px-6 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2">
                <Globe2 className="w-5 h-5" />
                Filter Region
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Rates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(CURRENCY_GROUPS).map(([group, pairs]) => (
          <div key={group} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              {group}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pairs.map(({ from, to, name }) => {
                const { data, labels } = generateChartData();
                return (
                  <div
                    key={`${from}-${to}`}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-sm text-gray-600">{name}</span>
                        <div className="text-lg font-semibold">{from}/{to}</div>
                      </div>
                      <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-600 text-sm font-medium">
                        Live
                      </div>
                    </div>
                    <div className="flex justify-between items-end mb-4">
                      <div className="text-2xl font-bold text-blue-600">
                        {rates[to]?.toFixed(4)}
                      </div>
                      <div className="text-green-500 flex items-center gap-1">
                        +0.25%
                      </div>
                    </div>
                    <PriceChart
                      data={data}
                      labels={labels}
                      color="#2563eb"
                      title={`${from}/${to}`}
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
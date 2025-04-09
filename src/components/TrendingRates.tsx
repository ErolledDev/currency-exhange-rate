import React from 'react';
import { TrendingUp, Bitcoin } from 'lucide-react';

interface Props {
  rates: Record<string, number>;
}

const TRENDING_FIAT_PAIRS = [
  { from: 'USD', to: 'EUR', name: 'Euro' },
  { from: 'USD', to: 'GBP', name: 'British Pound' },
  { from: 'USD', to: 'JPY', name: 'Japanese Yen' },
  { from: 'EUR', to: 'GBP', name: 'EUR to GBP' },
];

const TRENDING_CRYPTO_PAIRS = [
  { from: 'BTC', to: 'USD', name: 'Bitcoin' },
  { from: 'ETH', to: 'USD', name: 'Ethereum' },
  { from: 'BNB', to: 'USD', name: 'Binance Coin' },
  { from: 'XRP', to: 'USD', name: 'Ripple' },
];

export default function TrendingRates({ rates }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Fiat Currency Rates */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold">Fiat Exchange Rates</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TRENDING_FIAT_PAIRS.map(({ from, to, name }) => (
            <div 
              key={`${from}-${to}`} 
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-600">{name}</span>
                  <div className="font-semibold">{from}/{to}</div>
                </div>
                <span className="text-lg font-bold text-blue-600">
                  {rates[to]?.toFixed(4)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptocurrency Rates */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <Bitcoin className="w-6 h-6 text-orange-500" />
          <h2 className="text-xl font-semibold">Crypto Exchange Rates</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TRENDING_CRYPTO_PAIRS.map(({ from, to, name }) => (
            <div 
              key={`${from}-${to}`} 
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-600">{name}</span>
                  <div className="font-semibold">{from}/{to}</div>
                </div>
                <span className="text-lg font-bold text-orange-500">
                  {rates[from]?.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
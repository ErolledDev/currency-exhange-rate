import React from 'react';
import { TrendingUp } from 'lucide-react';

interface Props {
  rates: Record<string, number>;
}

const TRENDING_PAIRS = [
  { from: 'USD', to: 'EUR' },
  { from: 'USD', to: 'GBP' },
  { from: 'USD', to: 'JPY' },
  { from: 'EUR', to: 'GBP' },
  { from: 'GBP', to: 'JPY' },
  { from: 'EUR', to: 'JPY' },
];

export default function TrendingRates({ rates }: Props) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Trending Exchange Rates</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TRENDING_PAIRS.map(({ from, to }) => (
          <div key={`${from}-${to}`} className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{from}/{to}</span>
              <span className="font-semibold">{rates[to]?.toFixed(4)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
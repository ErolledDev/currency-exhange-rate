import React from 'react';
import { TrendingUp, DollarSign, BarChart2 } from 'lucide-react';

export default function News() {
  const articles = [
    {
      title: 'USD Strengthens Against Major Currencies',
      excerpt: 'The US dollar continued its upward trend against major currencies as Federal Reserve maintains hawkish stance...',
      date: 'March 15, 2025',
      category: 'Market Analysis',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3'
    },
    {
      title: 'Euro Reaches New Heights',
      excerpt: 'The European currency shows remarkable strength in global markets as economic indicators improve...',
      date: 'March 14, 2025',
      category: 'Currency News',
      image: 'https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixlib=rb-4.0.3'
    },
    {
      title: 'Asian Markets Report',
      excerpt: 'Asian currencies demonstrate resilience amid global economic uncertainties...',
      date: 'March 13, 2025',
      category: 'Regional Updates',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Market News & Analysis</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Stay informed with the latest currency market news, trends, and expert analysis.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="w-8 h-8 text-green-600" />,
              title: 'Market Trend',
              value: 'Bullish',
              detail: 'Major pairs showing upward momentum'
            },
            {
              icon: <DollarSign className="w-8 h-8 text-blue-600" />,
              title: 'Trading Volume',
              value: '$2.1T',
              detail: '24h global forex volume'
            },
            {
              icon: <BarChart2 className="w-8 h-8 text-purple-600" />,
              title: 'Volatility Index',
              value: '12.4',
              detail: 'Moderate market volatility'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-2xl font-bold mb-2">{item.value}</p>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{article.category}</div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="text-sm text-gray-500">{article.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
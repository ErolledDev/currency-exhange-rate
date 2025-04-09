import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter';
import TrendingRates from '../components/TrendingRates';
import { Globe2, Shield, Clock, BarChart2 } from 'lucide-react';

interface HomeProps {
  currencies: string[];
  rates: Record<string, number>;
}

export default function Home({ currencies, rates }: HomeProps) {
  return (
    <div className="space-y-16 pt-16">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Exchange Currencies <br />
                <span className="text-blue-300">Like a Pro</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Experience real-time currency conversion with institutional-grade accuracy. Access 590+ currencies worldwide with premium features.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-300" />
                  <span className="text-white">Real-time Updates</span>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-300" />
                  <span className="text-white">Bank-grade Security</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <CurrencyConverter currencies={currencies} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Market Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Market Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Track real-time exchange rates for major currency pairs worldwide</p>
        </div>
        <TrendingRates rates={rates} />
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ExchangePro?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the most comprehensive and reliable currency exchange platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="w-8 h-8 text-blue-600" />,
                title: "Global Coverage",
                description: "Access to 590+ currencies including major, minor, and exotic pairs"
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Bank-Grade Security",
                description: "Enterprise-level encryption and security protocols to protect your data"
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Real-Time Updates",
                description: "Live exchange rates updated every minute from trusted sources"
              },
              {
                icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
                title: "Advanced Analytics",
                description: "Comprehensive charts and analysis tools for informed decisions"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "590+", label: "Supported Currencies" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "0.1%", label: "Average Spread" },
              { value: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Converting?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust ExchangePro for their currency exchange needs
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
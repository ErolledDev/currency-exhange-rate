import React from 'react';
import { Shield, Globe, Clock, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ExchangePro</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Leading the way in digital currency exchange with cutting-edge technology and institutional-grade accuracy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At ExchangePro, we're committed to providing the most accurate and reliable currency exchange services globally. Our platform combines cutting-edge technology with institutional-grade security to deliver a premium currency exchange experience.
            </p>
            <p className="text-gray-600">
              Founded in 2025, we've quickly become a trusted name in the currency exchange industry, serving millions of users worldwide with our advanced trading platform and comprehensive market analysis tools.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: 'Security First',
                description: 'Bank-grade encryption and security protocols'
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: 'Global Coverage',
                description: '590+ currencies supported worldwide'
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: '24/7 Service',
                description: 'Round-the-clock support and operations'
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: 'Expert Team',
                description: 'Financial experts and tech professionals'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Chief Executive Officer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'
              },
              {
                name: 'Emily Thompson',
                role: 'Head of Operations',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
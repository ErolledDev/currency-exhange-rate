import React from 'react';

export default function Terms() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <p className="lead mb-8">
            Please read these Terms of Service carefully before using ExchangePro's currency exchange services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using ExchangePro's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
          <p>
            ExchangePro provides real-time currency exchange rates and conversion services. We strive to maintain accurate and up-to-date information but cannot guarantee absolute accuracy of all rates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Obligations</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide accurate information</li>
            <li>Maintain the security of your account</li>
            <li>Comply with all applicable laws</li>
            <li>Use the service responsibly</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of ExchangePro are owned by us and protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            ExchangePro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
          <p>
            For any questions regarding these Terms of Service, please contact us at:
            <br />
            Email: legal@exchangepro.com
            <br />
            Address: 123 Financial District, New York, NY 10004
          </p>

          <p className="text-sm text-gray-600 mt-8">
            Last updated: March 15, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
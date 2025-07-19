import React from 'react';
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-8">
              <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-600">Last updated: December 2023</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the Finance Angels website and services ("Service"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-600">
                These Terms of Service ("Terms") govern your use of our website and services 
                operated by Finance Angels ("Company," "we," "us," or "our").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Finance Angels provides a platform that connects users with financial 
                institutions for credit cards, loans, and other financial products. 
                Our services include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Credit card comparison and application services</li>
                <li>Loan application facilitation</li>
                <li>Financial product information and education</li>
                <li>EMI calculator and financial tools</li>
                <li>Customer support and assistance</li>
              </ul>
              <p className="text-gray-600">
                We act as an intermediary between users and financial institutions. 
                We do not provide financial products directly but facilitate the 
                application process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Eligibility</h2>
              <p className="text-gray-600 mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Be at least 18 years old</li>
                <li>Be a resident of India</li>
                <li>Have the legal capacity to enter into agreements</li>
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to refuse service to anyone for any reason 
                at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts and Registration</h2>
              <p className="text-gray-600 mb-4">
                When you create an account or submit applications through our platform:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You must provide accurate, current, and complete information</li>
                <li>You are responsible for all activities under your account</li>
                <li>You must notify us immediately of any unauthorized use</li>
                <li>We may terminate accounts that violate these terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Violate any applicable laws or regulations</li>
                <li>Provide false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our platform</li>
                <li>Use automated systems to access our services</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Distribute malware or harmful code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Financial Products and Services</h2>
              <p className="text-gray-600 mb-4">
                <strong>Important Disclaimer:</strong> We are not a bank or financial institution. 
                We do not provide financial products directly but facilitate connections 
                between users and financial institutions.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>All financial products are provided by partner banks and institutions</li>
                <li>We do not guarantee approval of any applications</li>
                <li>Terms and conditions of financial products are set by the providers</li>
                <li>We are not responsible for the decisions of financial institutions</li>
                <li>Interest rates and fees are determined by the financial institutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection and use of personal 
                information is governed by our Privacy Policy, which is incorporated 
                into these Terms by reference.
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the collection and use of your 
                information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                The Service and its original content, features, and functionality are 
                owned by Finance Angels and are protected by international copyright, 
                trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600">
                You may not copy, modify, distribute, sell, or lease any part of our 
                services without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitations</h2>
              <p className="text-gray-600 mb-4">
                <strong>Service Availability:</strong> We strive to provide reliable services, 
                but we do not guarantee uninterrupted access or error-free operation.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Financial Advice:</strong> We do not provide financial advice. 
                All information provided is for educational purposes only. Please consult 
                with qualified financial professionals for personalized advice.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Third-Party Services:</strong> We are not responsible for the 
                services, content, or practices of third-party websites or services 
                linked to our platform.
              </p>
              <p className="text-gray-600">
                <strong>Limitation of Liability:</strong> To the maximum extent permitted 
                by law, we shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify and hold harmless Finance Angels and its officers, 
                directors, employees, and agents from any claims, damages, losses, or 
                expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services immediately, 
                without prior notice, for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the Service will cease immediately. 
                All provisions of these Terms which by their nature should survive 
                termination shall survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the 
                laws of India, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600">
                Any disputes arising from these Terms or your use of our services 
                shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice 
                prior to any new terms taking effect.
              </p>
              <p className="text-gray-600">
                Your continued use of our services after any changes constitutes 
                acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-600">
                If any provision of these Terms is held to be unenforceable or invalid, 
                such provision will be changed and interpreted to accomplish the objectives 
                of such provision to the greatest extent possible under applicable law, 
                and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@financeangels.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 9717414195</p>
              </div>
            </section>

            <section>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                    <p className="text-yellow-700 text-sm">
                      These Terms of Service constitute a legally binding agreement between you 
                      and Finance Angels. By using our services, you acknowledge that you have 
                      read, understood, and agree to be bound by these terms.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 
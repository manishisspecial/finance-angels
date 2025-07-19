import React from 'react';
import { Shield, Eye, Lock, Users, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-8">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-600">Last updated: December 2023</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Finance Angels ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our website and services.
              </p>
              <p className="text-gray-600">
                By using our services, you agree to the collection and use of information in 
                accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Full name and contact details</li>
                <li>Email address and phone number</li>
                <li>PAN number and date of birth</li>

                <li>Employment and income details</li>
                <li>Bank account information (when required)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Technical Information</h3>
              <p className="text-gray-600 mb-4">
                We automatically collect certain technical information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referral sources</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Cookies and Tracking</h3>
              <p className="text-gray-600">
                We use cookies and similar technologies to enhance your experience, 
                analyze usage patterns, and provide personalized content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Process your credit card and loan applications</li>
                <li>Verify your identity and eligibility</li>
                <li>Connect you with partner banks and financial institutions</li>
                <li>Provide customer support and assistance</li>
                <li>Send important updates and notifications</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 With Partner Banks</h3>
              <p className="text-gray-600 mb-4">
                We share your application information with partner banks and financial 
                institutions to process your requests and provide services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Service Providers</h3>
              <p className="text-gray-600 mb-4">
                We may share information with trusted third-party service providers 
                who assist us in operating our platform and providing services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Legal Requirements</h3>
              <p className="text-gray-600 mb-4">
                We may disclose information when required by law, regulation, or 
                legal process, or to protect our rights and safety.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Business Transfers</h3>
              <p className="text-gray-600">
                In the event of a merger, acquisition, or sale of assets, your 
                information may be transferred as part of the business transaction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to 
                protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information 
                provided in the "Contact Us" section.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Provide our services and fulfill our obligations</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Protect against fraud and abuse</li>
              </ul>
              <p className="text-gray-600">
                When we no longer need your information, we will securely delete 
                or anonymize it in accordance with our data retention policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites and services. 
                We are not responsible for the privacy practices of these third parties. 
                We encourage you to review their privacy policies before providing 
                any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for children under the age of 18. 
                We do not knowingly collect personal information from children. 
                If you believe we have collected information from a child, please 
                contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify 
                you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a prominent notice on our platform</li>
              </ul>
              <p className="text-gray-600">
                Your continued use of our services after any changes constitutes 
                acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data 
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@financeangels.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 9717414195</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600">
                This Privacy Policy is governed by and construed in accordance with 
                the laws of India. Any disputes arising from this policy will be 
                subject to the exclusive jurisdiction of the courts in Delhi, India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 
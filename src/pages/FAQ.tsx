import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I start fundraising with NayePankh Foundation?',
      answer: 'To start fundraising, simply create an account and complete your profile. You\'ll receive a unique referral code that you can share with potential donors. Our learning modules will guide you through the process.',
    },
    {
      question: 'How are donations tracked?',
      answer: 'Each fundraiser receives a unique referral code. When donors use this code during donation, it\'s automatically tracked in your dashboard. You can view all transactions and their status in real-time.',
    },
    {
      question: 'What are the different reward levels?',
      answer: 'We have multiple reward tiers: Silver (₹25,000), Gold (₹50,000), and Platinum (₹1,00,000). Each level unlocks new perks and recognition for your fundraising efforts.',
    },
    {
      question: 'How can donors make payments?',
      answer: 'Donors can make payments through various methods including UPI, credit/debit cards, and net banking. All transactions are secure and processed through our trusted payment gateway.',
    },
    {
      question: 'How do I track my fundraising progress?',
      answer: 'Your dashboard shows real-time progress towards your goals, including total amount raised, number of donors, and reward tier progress. You can also download detailed reports.',
    },
    {
      question: 'What support does NayePankh provide to fundraisers?',
      answer: 'We provide comprehensive support including learning modules, marketing materials, regular webinars, and dedicated support staff. Our team is always available to help you succeed.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
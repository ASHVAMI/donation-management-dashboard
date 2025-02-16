import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { X } from 'lucide-react';

interface DonationForm {
  fullName: string;
  email: string;
  phone: string;
  amount: number;
  taxExemption: boolean;
}

const DonationPage = () => {
  const { referralCode } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [form, setForm] = useState<DonationForm>({
    fullName: '',
    email: '',
    phone: '',
    amount: 0,
    taxExemption: false,
  });

  const donationOptions = [
    {
      amount: 15000,
      title: "Contribute towards a child's education for 12 Months",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
    },
    {
      amount: 9000,
      title: "Contribute towards a child's education for 6 Months",
      image: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      amount: 4500,
      title: "Contribute towards a child's education for 3 Months",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1240&q=80"
    },
    {
      amount: 3000,
      title: "Contribute towards a child's education for 2 Months",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  const handleDonateClick = (amount: number) => {
    setSelectedAmount(amount);
    setForm(prev => ({ ...prev, amount }));
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', { ...form, referralCode });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Support Children's Education</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img
                  src={option.image}
                  alt="Children"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4 h-20">
                  {option.title}
                </h2>
                <button
                  onClick={() => handleDonateClick(option.amount)}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  ₹{option.amount.toLocaleString()}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Information Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                {referralCode && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Reference Code (if available)
                    </label>
                    <input
                      type="text"
                      value={referralCode}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Donation Amount
                  </label>
                  <input
                    type="number"
                    value={form.amount}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    readOnly
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="taxExemption"
                    checked={form.taxExemption}
                    onChange={(e) => setForm({ ...form, taxExemption: e.target.checked })}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="taxExemption" className="ml-2 block text-sm text-gray-900">
                    Do you wish to receive Tax Exemption?
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationPage;
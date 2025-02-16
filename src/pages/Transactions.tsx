import React from 'react';

interface Transaction {
  id: string;
  name: string;
  amount: number;
  transactionId: string;
  date: string;
  pancard: string;
  status: 'completed' | 'pending' | 'failed';
}

const Transactions = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      name: 'Prashant Shukla',
      amount: 15000,
      transactionId: 'prs_123XYZMnopqab',
      date: '2024-03-21',
      pancard: 'XXXXX1234X',
      status: 'completed',
    },
    {
      id: '2',
      name: 'Amit Kumar',
      amount: 5000,
      transactionId: 'amt_456ABCDefghij',
      date: '2024-03-20',
      pancard: 'YYYYY5678Y',
      status: 'completed',
    },
    {
      id: '3',
      name: 'Neha Singh',
      amount: 10000,
      transactionId: 'nhs_789PQRStuvwx',
      date: '2024-03-19',
      pancard: 'ZZZZZ9012Z',
      status: 'pending',
    },
    {
      id: '4',
      name: 'Rajesh Verma',
      amount: 7500,
      transactionId: 'rjv_321MLKJihgfe',
      date: '2024-03-18',
      pancard: 'WWWWW3456W',
      status: 'completed',
    },
    {
      id: '5',
      name: 'Pooja Patel',
      amount: 3000,
      transactionId: 'pjp_654DCBAbcdef',
      date: '2024-03-17',
      pancard: 'VVVVV7890V',
      status: 'failed',
    },
  ];

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
              <option>All Time</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Export CSV
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Transaction ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Pancard</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-200">
                  <td className="px-6 py-4 text-sm text-gray-600">{transaction.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{transaction.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹{transaction.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{transaction.transactionId}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{transaction.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{transaction.pancard}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
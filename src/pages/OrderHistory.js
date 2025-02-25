import React from 'react';

function OrderHistory() {
  // This is a placeholder. In a real application, you would fetch the user's order history from a backend.
  const orders = [
    { id: 1, date: '2023-05-15', total: 156.78, status: 'Delivered' },
    { id: 2, date: '2023-05-10', total: 89.99, status: 'Shipped' },
    { id: 3, date: '2023-05-05', total: 210.50, status: 'Processing' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Total</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">₹{order.total.toFixed(2)}</td>
                <td className="py-2 px-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;


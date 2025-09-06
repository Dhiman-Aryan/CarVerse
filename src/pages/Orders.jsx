// pages/Orders.js
import React from "react";

const Orders = () => {
  // Mock order data
  const orders = [
    {
      id: "ORD-12345",
      date: "2023-05-15",
      status: "Delivered",
      items: [
        {
          id: 1,
          name: "Tesla Model S",
          price: 79999,
          image:
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          quantity: 1,
        },
      ],
      total: 86398.92,
    },
    {
      id: "ORD-12346",
      date: "2023-04-22",
      status: "Delivered",
      items: [
        {
          id: 4,
          name: "Porsche 911",
          price: 99300,
          image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          quantity: 1,
        },
        {
          id: 5,
          name: "Toyota Prius",
          price: 24700,
          image:
            "https://images.unsplash.com/photo-1621114957136-10e3710cec2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          quantity: 1,
        },
      ],
      total: 133999.0,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Your Orders</h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <i className="fas fa-box-open text-5xl text-gray-300 mb-6"></i>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              No orders yet
            </h2>
            <p className="text-gray-500 mb-8">
              Your order history will appear here once you make a purchase.
            </p>
            <a
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Start Shopping
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Order Placed</p>
                    <p className="font-medium">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-medium">
                      ${order.total.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Order #</p>
                    <p className="font-medium">{order.id}</p>
                  </div>

                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Items</h3>

                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-grow">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="font-medium">
                            ${item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="text-blue-600 hover:text-blue-800 font-medium mr-6">
                      View Invoice
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Order Again
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;

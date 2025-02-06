import React from "react";
import { Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const Overview = () => {
  // Data for charts
  const revenueData = [
    {
      name: "Grand Koi Exhibition",
      revenue: 4000000,
      refund: 500000,
      profit: 3500000,
    },
    {
      name: "Premium Koi Show",
      revenue: 5000000,
      refund: 300000,
      profit: 4700000,
    },
    {
      name: "Rare Koi Search",
      revenue: 4500000,
      refund: 400000,
      profit: 4100000,
    },
    {
      name: "Spring Koi Festival",
      revenue: 3000000,
      refund: 200000,
      profit: 2800000,
    },
    {
      name: "Koi Paradise Show",
      revenue: 3500000,
      refund: 250000,
      profit: 3250000,
    },
    {
      name: "Tropical Koi Masters",
      revenue: 2000000,
      refund: 150000,
      profit: 1850000,
    },
  ];

  const profitDistributionData = [
    { name: "Grand Koi Exhibition", value: 12.8 },
    { name: "Premium Koi Show", value: 21.1 },
    { name: "Rare Koi Search", value: 24.8 },
    { name: "Spring Koi Festival", value: 11.5 },
    { name: "Koi Paradise Show", value: 15.5 },
    { name: "Tropical Koi Masters", value: 10.1 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28BEA",
    "#FF6699",
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
     

      {/* General Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card
          className="shadow-lg"
          bodyStyle={{ textAlign: "center", padding: "20px" }}
        >
          <h3 className="text-lg font-semibold text-gray-700">
            Total Competitions
          </h3>
          <p className="text-3xl font-bold text-blue-500">10</p>
        </Card>
        <Card
          className="shadow-lg"
          bodyStyle={{ textAlign: "center", padding: "20px" }}
        >
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold text-green-500">43</p>
        </Card>
        <Card
          className="shadow-lg"
          bodyStyle={{ textAlign: "center", padding: "20px" }}
        >
          <h3 className="text-lg font-semibold text-gray-700">
            Total Koi Fish
          </h3>
          <p className="text-3xl font-bold text-pink-500">191</p>
        </Card>
      </div>

      {/* Revenue Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card
          className="shadow-lg"
          bodyStyle={{ textAlign: "center", padding: "20px" }}
        >
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-3xl font-bold text-teal-500">17,800,000.00 đ</p>
        </Card>
        <Card
          className="shadow-lg"
          bodyStyle={{ textAlign: "center", padding: "20px" }}
        >
          <h3 className="text-lg font-semibold text-gray-700">Refunds</h3>
          <p className="text-3xl font-bold text-red-500">1,390,000.00 đ</p>
        </Card>
        <Card
          className="shadow-lg"
          bodyStyle={{ textAlign: "center", padding: "20px" }}
        >
          <h3 className="text-lg font-semibold text-gray-700">Net Profit</h3>
          <p className="text-3xl font-bold text-green-500">16,410,000.00 đ</p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="shadow-lg" bodyStyle={{ padding: "20px" }}>
          <h3 className="text-lg font-semibold text-center mb-4">
            Revenue Chart
          </h3>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#0088FE" name="Revenue" />
                <Bar dataKey="refund" fill="#FF8042" name="Refunds" />
                <Bar dataKey="profit" fill="#00C49F" name="Profit" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Profit Distribution Chart */}
        <Card className="shadow-lg" bodyStyle={{ padding: "20px" }}>
          <h3 className="text-lg font-semibold text-center mb-4">
            Profit Distribution by Competition
          </h3>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={profitDistributionData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {profitDistributionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Overview;

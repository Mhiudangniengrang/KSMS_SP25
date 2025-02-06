import React, { useState } from "react";
import { Table, Input, Button, Tag, Select, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

function Category() {
  const [searchText, setSearchText] = useState("");
  const [filterVariety, setFilterVariety] = useState("");
  const [data, setData] = useState([
    {
      key: "1",
      categoryName: "Mini Kohaku",
      sizeCategory: "Under 20 cm",
      variety: "Kohaku",
      participatingKoi: 120,
      status: "Active",
    },
    {
      key: "2",
      categoryName: "Standard Showa",
      sizeCategory: "20-30 cm",
      variety: "Showa",
      participatingKoi: 80,
      status: "Inactive",
    },
    {
      key: "3",
      categoryName: "Premium Taisho Sanke",
      sizeCategory: "30-50 cm",
      variety: "Sanke",
      participatingKoi: 50,
      status: "Active",
    },
  ]);

  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const handleFilterVariety = (value) => {
    setFilterVariety(value);
  };

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.categoryName.toLowerCase().includes(searchText) ||
      item.sizeCategory.toLowerCase().includes(searchText) ||
      item.variety.toLowerCase().includes(searchText);
    const matchesVariety = filterVariety
      ? item.variety === filterVariety
      : true;
    return matchesSearch && matchesVariety;
  });

  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
      sorter: (a, b) => a.categoryName.localeCompare(b.categoryName),
    },
    {
      title: "Size Category",
      dataIndex: "sizeCategory",
      key: "sizeCategory",
      sorter: (a, b) => a.sizeCategory.localeCompare(b.sizeCategory),
    },
    {
      title: "Variety",
      dataIndex: "variety",
      key: "variety",
      filters: [
        { text: "Kohaku", value: "Kohaku" },
        { text: "Showa", value: "Showa" },
        { text: "Sanke", value: "Sanke" },
      ],
      onFilter: (value, record) => record.variety === value,
    },
    {
      title: "Participating Koi",
      dataIndex: "participatingKoi",
      key: "participatingKoi",
      sorter: (a, b) => a.participatingKoi - b.participatingKoi,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={status === "Active" ? "green" : "red"}
          className="rounded-full px-3 py-1"
        >
          {status}
        </Tag>
      ),
      filters: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex items-center space-x-2">
          <Button
            type="text"
            icon={<EditOutlined />}
            className="text-gray-500 hover:text-blue-500"
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            className="text-gray-500 hover:text-red-500"
            danger
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* <Typography.Title level={3}>Categories</Typography.Title> */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="mb-2 md:mb-0">
          <Search
            placeholder="Search categories..."
            onSearch={handleSearch}
            className="w-full md:w-64"
            allowClear
          />
        </div>
        <div>
          <Select
            placeholder="Filter by variety"
            allowClear
            className="w-full md:w-64"
            onChange={handleFilterVariety}
          >
            <Option value="Kohaku">Kohaku</Option>
            <Option value="Showa">Showa</Option>
            <Option value="Sanke">Sanke</Option>
          </Select>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
        className="bg-white rounded-lg"
      />
    </div>
  );
}

export default Category;

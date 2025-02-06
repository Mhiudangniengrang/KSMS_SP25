import React from "react";
import { Input, Button, Card, Tag } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";

const News = () => {
  // Sample news data
  const newsItem = {
    id: 1,
    title: "Koi Competition 2025 - An Event to Look Forward to",
    category: "Competition",
    date: "August 20, 2022",
    image: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/471679313_1362648331729659_8044845932844624948_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=c_ItmUiIAuwQ7kNvgH0owgV&_nc_oc=AdiVhs2z_fkGVzfSGG4-Bq-uGjepIqTulpM94epk3uJRLkFSwQeJqj81B--p2GEASLk&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=A4wPYKyRpHD61TQXj1SMKvZ&oh=00_AYCj0rrFplvcPgZ7YpyA_KeaSKgkBS1-b1mjd9B4mNaIzg&oe=67A9F2F9",
    tag: "koi",
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">News</h1>

      {/* Search and Create Section */}
      <div className="flex gap-4 mb-8">
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined className="text-gray-400" />}
          className="flex-1"
          size="large"
        />
        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Create
        </Button>
      </div>

      {/* News Card */}
      <Card
        hoverable
        className="max-w-sm"
        cover={
          <img
            alt="Koi Competition"
            src={newsItem.image}
            className="h-64 object-cover"
          />
        }
      >
        <div className="flex items-center justify-between mb-2">
          <Tag className="text-white bg-blue-500 border-0 rounded-full ">{newsItem.category}</Tag>
          <span className="text-gray-500 text-sm">{newsItem.date}</span>
        </div>
        <h2 className="text-xl font-semibold mb-3">{newsItem.title}</h2>
        <div className="bg-gray-100 border-0 rounded-full w-1/5 text-center p-2">Edit</div>
      </Card>
    </div>
  );
};

export default News;

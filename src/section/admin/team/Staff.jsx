import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Staff() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={status === "Active" ? "text-green-500" : "text-red-500"}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-3">
          <EditOutlined className="cursor-pointer" />
          <DeleteOutlined className="cursor-pointer" />
        </div>
      ),
    },
  ];

  const staffData = [
    {
      key: "1",
      name: "John Smith",
      email: "john@example.com",
      phone: "123-456-789",
      status: "Active",
      role: "Staff",
    },
    {
      key: "2",
      name: "Leo",
      email: "leo@example.com",
      phone: "987-654-321",
      status: "Active",
      role: "Staff",
    },
  ];

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <div className="absolute top-[-50px] right-0">
          <Button type="primary" onClick={showModal}>
            Add New
          </Button>{" "}
        </div>
      </div>
      <Modal
        title="Add New Manager"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" className="space-y-4">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
            className="flex flex-col"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input the email!",
                type: "email",
              },
            ]}
            className="flex flex-col"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please input the phone number!" },
            ]}
            className="flex flex-col"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={staffData}
        pagination={{
          total: staffData.length,
          pageSize: 6,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
        }}
      />
    </div>
  );
}

export default Staff;

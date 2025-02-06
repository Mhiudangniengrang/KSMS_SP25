import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";

function StepTwo() {
  const percentageSuffix = "%";

  // Define all available criteria options
  const criteriaOptions = [
    { value: "color", label: "Color" },
    { value: "bodyShape", label: "Body Shape" },
    { value: "pattern", label: "Pattern" },
    { value: "size", label: "Size" },
    { value: "quality", label: "Quality" },
    { value: "health", label: "Health" },
    { value: "swimming", label: "Swimming" },
    { value: "markings", label: "Markings" },
    { value: "balance", label: "Balance" },
    { value: "elegance", label: "Elegance" },
  ];

  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [criteriaPercentages, setCriteriaPercentages] = useState({});

  const categories = [
    { value: "mini-kohaku", label: "Mini Kohaku" },
    { value: "standard-showa", label: "Standard Showa" },
    { value: "premium-taisho-sanke", label: "Premium Taisho Sanke" },
  ];

  const mainRounds = [
    { value: "preliminary", label: "Vòng Sơ Khảo" },
    { value: "evaluation", label: "Vòng Đánh Giá Chính" },
    { value: "final", label: "Vòng Chung Kết" },
  ];

  // State for sub-rounds
  const [subRounds, setSubRounds] = useState([]);
  const [currentSubRound, setCurrentSubRound] = useState("");

  // Handle adding new sub-round
  const handleAddSubRound = () => {
    if (currentSubRound) {
      setSubRounds([...subRounds, currentSubRound]);
      setCurrentSubRound("");
    }
  };

  // Handle criteria selection
  const handleCriteriaChange = (values) => {
    if (values.length <= 3) {
      setSelectedCriteria(values);
      // Reset percentages for removed criteria
      const newPercentages = {};
      values.forEach((criteria) => {
        if (criteriaPercentages[criteria]) {
          newPercentages[criteria] = criteriaPercentages[criteria];
        }
      });
      setCriteriaPercentages(newPercentages);
    }
  };

  // Handle percentage change
  const handlePercentageChange = (criteria, value) => {
    setCriteriaPercentages((prev) => ({
      ...prev,
      [criteria]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">
        Step 2: Competition Categories & Judging Criteria
      </h2>

      {/* Category Section */}
      <Form.Item label="Competition Category" name="competitionCategory">
        <Select placeholder="Select competition category">
          {categories.map((category) => (
            <Select.Option key={category.value} value={category.value}>
              {category.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      {/* Size Section */}
      <Form.Item label="Size" name="size">
        <Select placeholder="Select size">
          <Select.Option value="size1">Size Class A</Select.Option>
          <Select.Option value="size2">Size Class B</Select.Option>
          <Select.Option value="size3">Size Class C</Select.Option>
        </Select>
      </Form.Item>

      {/* Variety Section */}
      <Form.Item label="Variety" name="variety">
        <Select placeholder="Select variety">
          <Select.Option value="kohaku">Kohaku</Select.Option>
          <Select.Option value="showa">Showa</Select.Option>
          <Select.Option value="taisho-sanke">Taisho Sanke</Select.Option>
        </Select>
      </Form.Item>

      {/* Main Round Section */}
      <Form.Item label="Main Round" name="mainRound">
        <Select placeholder="Select main round">
          {mainRounds.map((round) => (
            <Select.Option key={round.value} value={round.value}>
              {round.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <div className="space-y-4">
        <Form.Item label="Round" className="mb-0">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Enter round number (e.g. Round 1)"
            value={subRounds}
            onChange={(values) => setSubRounds(values)}
            dropdownStyle={{ display: "none" }} // Hide dropdown menu
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const value = e.target.value;
                if (value && !subRounds.includes(value)) {
                  setSubRounds([...subRounds, value]);
                }
              }
            }}
          />
        </Form.Item>
      </div>

      {/* Updated Criteria Section */}
      <div className="space-y-4">
        <h3 className="font-semibold">Criteria (Select up to 3)</h3>
        <Form.Item name="selectedCriteria">
          <Select
            mode="multiple"
            placeholder="Select criteria"
            value={selectedCriteria}
            onChange={handleCriteriaChange}
            maxTagCount={3}
            className="w-full"
          >
            {criteriaOptions.map((criteria) => (
              <Select.Option
                key={criteria.value}
                value={criteria.value}
                disabled={
                  selectedCriteria.length >= 3 &&
                  !selectedCriteria.includes(criteria.value)
                }
              >
                {criteria.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {selectedCriteria.map((criteria) => (
          <Form.Item
            key={criteria}
            label={criteriaOptions.find((opt) => opt.value === criteria)?.label}
            name={`${criteria}Percentage`}
            rules={[
              { required: true, message: "Please input the percentage" },
              {
                type: "number",
                min: 0,
                max: 100,
                message: "Percentage must be between 0 and 100",
              },
            ]}
          >
            <Input
              suffix={percentageSuffix}
              placeholder="Enter percentage"
              onChange={(e) => handlePercentageChange(criteria, e.target.value)}
              type="number"
              min={0}
              max={100}
            />
          </Form.Item>
        ))}
      </div>

      {/* Number of Koi Section */}
      <Form.Item label="Number of Koi" name="numberOfKoi">
        <Input placeholder="Enter number of koi" type="number" />
      </Form.Item>

      {/* Awards and Prize Section */}
      <div className="grid grid-cols-2 gap-4">
        <Form.Item label="Awards" name="awards">
          <Input placeholder="Enter awards" />
        </Form.Item>
        <Form.Item label="Prize" name="prize">
          <Input placeholder="Enter prize" />
        </Form.Item>
      </div>

      {/* Referee Section */}
      <Form.Item label="Referee" name="referee">
        <Select
          mode="multiple"
          placeholder="Select referees"
          className="w-full"
        >
          <Select.Option value="referee1">Mary Johnson</Select.Option>
          <Select.Option value="referee2">James Smith</Select.Option>
        </Select>
      </Form.Item>
    </div>
  );
}

export default StepTwo;

import { Typography } from "antd";
import React from "react";
import Overview from "../Overview";

function OverviewView() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        Koi Fish Statistics
      </h1>{" "}
      <Overview />
    </div>
  );
}

export default OverviewView;

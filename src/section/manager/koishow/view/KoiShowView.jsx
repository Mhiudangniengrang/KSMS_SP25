import { Button } from "antd";
import React from "react";
import KoiShow from "../KoiShow";

function KoiShowView() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 mt-5">
        <h2 className="text-3xl font-semibold">My Koi Show</h2>
      </div>
      <KoiShow />
    </div>
  );
}

export default KoiShowView;

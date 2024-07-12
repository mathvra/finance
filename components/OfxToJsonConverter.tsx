"use client";
import React, { useState } from "react";
import { parse } from "ofx-js";
import { Input } from "./ui/input";

const OfxToJsonConverter: React.FC = () => {
  const [jsonResult, setJsonResult] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const ofxContent = e.target?.result as string;
        const json = await parse(ofxContent);
        setJsonResult(json);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="text-gray-50">
      <Input type="file" accept=".ofx" onChange={handleFileUpload} />
      {jsonResult && <pre>{JSON.stringify(jsonResult, null, 2)}</pre>}
    </div>
  );
};

export default OfxToJsonConverter;

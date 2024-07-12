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
    <div className="flex flex-col gap-4 text-gray-50">
      <Input type="file" accept=".ofx" onChange={handleFileUpload} />
      {jsonResult && (
        <div>
          <h2>Resultado:</h2>
          <pre className="flex flex-col overflow-auto max-w-[80vw]">
            {JSON.stringify(jsonResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default OfxToJsonConverter;

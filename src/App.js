import React from "react";

import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./Document";

import { questions } from "./data";

export const App = () => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <PDFViewer
        style={{
          width: "50vw",
          height: "90vh",
        }}
      >
        <MyDocument questions={questions} />
      </PDFViewer>
    </div>
  );
};

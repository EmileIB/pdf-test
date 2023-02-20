import React, { useState } from "react";

import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./Document";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <PDFViewer
        style={{
          width: "50vw",
          height: "90vh",
        }}
      >
        <MyDocument count={count} />
      </PDFViewer>
    </div>
  );
};

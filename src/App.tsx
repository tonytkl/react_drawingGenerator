import { useState } from "react";
import { Controller } from "./components/controller/controller";
import { Drawing } from "./components/drawing/drawing";
import { ScreenConfig } from "./type/screenConfig";
// import generatePDF from "react-to-pdf";

function App() {
  // const getTargetElement = (): HTMLElement => {
  //   const element = document.getElementById("drawing");
  //   if (!element) {
  //     throw new Error("Element with id 'drawing' not found");
  //   }
  //   return element as HTMLElement;
  // };

  // const downloadPdf = () => generatePDF(getTargetElement);

  const [screenConfig, setConfig] = useState<ScreenConfig>({} as ScreenConfig);

  return (
    <div className="App flex flex-col h-screen min-h-screen ">
      <div className="w-full bg-dark p-2">
        <img src="logo.png" alt="" className="w-24" />
      </div>
      <div className="flex">
        <Controller />
        <Drawing />
      </div>
    </div>
  );
}

export default App;

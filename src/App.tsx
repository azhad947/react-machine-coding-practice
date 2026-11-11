import { useState } from "react";
import OtpDesign from "./pages/OTP/Otp";
import MainToast from "./pages/Toast/MainToast";
import { STEPPER_STEPS } from "./constants";
import Stepper from "./pages/Steppper/Stepper";
import Pagination from "./pages/Pagination/Pagination";
import Virtualization from "./pages/Virtualization/Virtualization";
import "./App.css";

const TABS = ["Toast", "OTP", "Stepper", "Pagination", "Virtualization"];

const App = () => {
  const [activeTab, setActiveTab] = useState("Toast");

  const renderTab = () => {
    switch (activeTab) {
      case "Toast": return <MainToast />;
      case "OTP": return <OtpDesign />;
      case "Stepper": return <Stepper steps={STEPPER_STEPS} />;
      case "Pagination": return <Pagination />;
      case "Virtualization": return <Virtualization />;
    }
  };

  return (
    <div>
      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default App;

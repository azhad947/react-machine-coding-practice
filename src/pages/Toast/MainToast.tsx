import { useState } from "react";
import Toast, { type ToastType } from "../../components/Toast";

const MainToast = () => {
  const [activeState, setActiveState] = useState<ToastType | "">("");
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "4px",
        }}
      >
        <button onClick={() => setActiveState("success")}>
          Success Toast Button
        </button>
        <button onClick={() => setActiveState("warning")}>
          Warning Toast Button
        </button>
        <button onClick={() => setActiveState("error")}>
          Error Toast Button
        </button>
        <button onClick={() => setActiveState("info")}>
          Info Toast Button
        </button>
      </div>
      <Toast active={activeState} onClose={() => setActiveState("")} />
    </div>
  );
};

export default MainToast;

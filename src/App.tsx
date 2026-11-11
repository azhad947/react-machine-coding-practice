import OtpDesign from "./pages/OTP/Otp";
import MainToast from "./pages/Toast/MainToast";
import { STEPPER_STEPS } from "./constants";
import Stepper from "./pages/Steppper/Stepper";
import Pagination from "./pages/Pagination/Pagination";
import Virtualization from "./pages/Virtualization/Virtualization";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
     <MainToast />
     <OtpDesign />
     <Stepper steps={STEPPER_STEPS} />
     <Pagination/>
     <Virtualization />
     
    </div>
  );
};

export default App;

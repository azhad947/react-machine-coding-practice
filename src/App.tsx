import OtpDesign from "./pages/OTP/Otp";
import MainToast from "./pages/Toast/MainToast";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
     <MainToast />
     <OtpDesign />
    </div>
  );
};

export default App;

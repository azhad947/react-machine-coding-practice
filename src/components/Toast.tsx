import { useEffect } from "react";

export type ToastType = "success" | "warning" | "error" | "info";

const colorPalette: Record<ToastType, string> = {
  success: "green",
  warning: "yellow",
  error: "red",
  info: "blue",
};

const Toast = ({ active, onClose }: { active: ToastType | ""; onClose: () => void }) => {
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [active, onClose]);

  if (!active) return null;

  return (
    <div style={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
      <div style={{ minWidth: "200px", padding: "12px 16px", backgroundColor: colorPalette[active] }}>
        {active}
      </div>
    </div>
  );
};

export default Toast;

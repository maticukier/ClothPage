import { useEffect, useState } from "react";
import { getToasts, removeToast, registerNotifier } from "../services/toastService";

export default function Toasts() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    registerNotifier(() => setToasts(getToasts()));
    setToasts(getToasts());
  }, []);

  useEffect(() => {
    const timers = toasts.map((t) =>
      setTimeout(() => removeToast(t.id), 2400)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts]);

  return (
    <div className="toast__container" aria-live="polite" aria-atomic="true">
      {toasts.map((t) => <div key={t.id} className="toast">{t.text}</div>)}
    </div>
  );
}

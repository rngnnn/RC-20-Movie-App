import React from "react";

import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">
    <AppRouter/>
    <ToastContainer/>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Advisors from "../../Pages/Advisors";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/advisors" element={<Advisors />} />
      <Route path="*" element={<Navigate to="/advisors" />} />
    </Routes>
  );
};
export default AppRouter;

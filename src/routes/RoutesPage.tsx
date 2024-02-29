import { Navigate, Route, Routes } from "react-router-dom";
import Politics from "../pages/Politics";
import Terms from "../pages/Terms";
import Index from "../pages/Index";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoutesPage;

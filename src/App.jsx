import { Route, Routes } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import Hero from "./pages/Hero";
import Api from "./pages/Api";
import Terms from "./pages/Terms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/api" element={<Api />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default App;
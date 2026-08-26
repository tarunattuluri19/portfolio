import ContactPage from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
            <Route path="/*" element={<Layout />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

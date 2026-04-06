import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FrontendPage from "./pages/FrontendPage";
import BackendPage from "./pages/BackendPage";
import DevOpsPage from "./pages/DevOpsPage";
import GamedevPage from "./pages/GamedevPage";

function App() {
  return (
    <Router>
      <div className="bg-[#131313] text-white selection:bg-secondary/30 selection:text-secondary min-h-screen">
        <Header />
        <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/frontend" element={<FrontendPage />} />
            <Route path="/backend" element={<BackendPage />} />
            <Route path="/devops" element={<DevOpsPage />} />
            <Route path="/gamedev" element={<GamedevPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

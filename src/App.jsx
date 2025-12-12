import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Userview from "./page/UserView";
import Header from "./Components/Header";
import Footer from "./Components/Footer";



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Header at top */}
        <Header />

        {/* Main content grows */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Userview />} />
          </Routes>
        </main>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

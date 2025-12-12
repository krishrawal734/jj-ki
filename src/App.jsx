import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import UserView from "./page/Userview.jsx";
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
            <Route path="/user/:id" element={<UserView />} />
          </Routes>
        </main>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

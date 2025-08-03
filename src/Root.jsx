import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserLogin from "./pages/UserLogin";
import EventsMaker from "./pages/EventsMaker";
import EventDetailView from "./components/EventDetailView";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<EventsMaker />} />
          <Route path="/user" element={<UserLogin />}/>
          <Route path="/eventDetails" element={<EventDetailView />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

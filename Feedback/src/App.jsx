import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Events } from "./Pages/Events";
import { Feedback } from "./Pages/Feedback";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/feedback" element={<Feedback />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
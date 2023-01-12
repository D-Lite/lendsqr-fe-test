import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./contexts/globalContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <GlobalProvider>
        <ToastContainer className="toast" />
        <div>
          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/userdetails/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;

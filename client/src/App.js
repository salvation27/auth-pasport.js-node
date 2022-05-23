import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [user,setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;

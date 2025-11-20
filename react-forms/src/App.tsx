import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Pages/Register/RegisterForm"
import LoginForm from "./Pages/Login/LoginForm"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

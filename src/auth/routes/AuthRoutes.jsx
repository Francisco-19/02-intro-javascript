import {Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPages } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage />}/>
        <Route path="register" element={<RegisterPages />}/>


        <Route path="/*" element={<Navigate to="/auth/login " /> }/>

        
    </Routes>
  )
}

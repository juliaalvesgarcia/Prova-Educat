import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import styled from "styled-components";
import DynamicsCardInput from "./Dynamics/DynamicsCardInput";
import Layout from "./Layout";
import NewStudentPage from "./Pages/NewStudentPage";


const RoutesApp = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/card" element={<DynamicsCardInput />} />
                    <Route path="/page" element={<NewStudentPage />} />
                </Routes>
            </BrowserRouter>

    )
}



export default RoutesApp;
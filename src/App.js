import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import Page
import {
    Home,
    LoginPage,
    RegisterPage,
    AdminPage,
    AdminChatPage,
    AdminListProductPage,
    AdminListCategoryPage,
    AdminProfilePage,
    UserPage,
    UserWishlistPage,
    UserProfilePage,
    UserChatPage,
    UserDetailPage,
} from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
                <Route exact path="/dashboard" element={<AdminPage />} />
                <Route exact path="/chatadmin" element={<AdminChatPage />} />
                <Route exact path="/listproduct" element={<AdminListProductPage />} />
                <Route exact path="/listcategory" element={<AdminListCategoryPage />} />
                <Route exact path="/profileadmin" element={<AdminProfilePage />} />
                <Route exact path="/home" element={<UserPage />} />
                <Route exact path="/wishlist" element={<UserWishlistPage />} />
                <Route exact path="/profileuser" element={<UserProfilePage />} />
                <Route exact path="/chatuser" element={<UserChatPage />} />
                <Route exact path="/detailproduct" element={<UserDetailPage />} />
            </Routes>
        </>
    );
}

export default App;

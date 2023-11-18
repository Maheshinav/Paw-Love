import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Nav/nav";
import HeroSection from "./components/Hero/hero";
import WelcomePage from "./pages/welcomePage/welcomePage";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import firebase from "./firebaseConfig";
import { useState, useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthProvider>
			<BrowserRouter>
				<Header currentUser={currentUser} />
				<Routes>
					<Route path="/" element={<HeroSection />} />
					<Route path="/login" element={<Login />} />
					<Route path="/welcomePage" element={<WelcomePage />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;

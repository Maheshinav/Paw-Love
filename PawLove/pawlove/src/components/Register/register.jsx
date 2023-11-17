// Register.jsx
import { useState } from "react";
import firebase from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { GiOppositeHearts } from "react-icons/gi";
import "firebase/compat/firestore";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			const userId = userCredential.user.uid;

			const userDocRef = firebase.firestore().collection("users").doc(userId);
			await userDocRef.set({
				username: username,
			});
  console.log('User registered and Firestore document set.');
			await firebase.auth().signOut();
			navigate("/login"); // Redirect to login page after successful registration
		} catch (error) {
			console.error("Error in user registration", error);
		}
	};

	return (
		<div
			className="vh-100 d-flex justify-content-center align-items-center"
			style={{ backgroundColor: "#65d7d7ff" }}
		>
			<div className="text-center">
				<div className="mb-4">
					<h2 className="mb-3">
						<FaPaw /> Join Our Clowder <GiOppositeHearts />{" "}
					</h2>
					<p className="mb-4 text-muted">
						Use your lovely paws to type in your details and join our furry
						community!
					</p>
					<img
						src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1700212242/Cat_wallpaper-modified_tamwoe.png"
						alt="Cat Wallpaper"
						style={{ width: "200px", height: "auto" }}
					/>
				</div>

				<form onSubmit={handleRegister} className="w-95 mx-auto">
					<div className="mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							type="email"
							className="form-control"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="btn"
						style={{ backgroundColor: "#f139c8", color: "white" }}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;

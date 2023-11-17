// Login.js
import { useState, useEffect } from 'react';
import firebase from '../../firebaseConfig';
import { FaPaw } from "react-icons/fa";
import { GiOppositeHearts } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate('/welcomePage'); // Adjust the route as needed
    }
 return () => {
            setEmail('');
            setPassword('');
        };
    }, [currentUser, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/welcomePage'); // Adjust the route as needed
    } catch (error) {
      console.error("Error signing in with password and email", error);
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#65d7d7ff' }}>
      <div className="text-center">
        <h2 className="mb-3"><FaPaw/> Login to PawLove <GiOppositeHearts/></h2>
        <p className="mb-4 text-muted">Use your lovely paws to type in your details and join our furry community!</p>
        <div className="mb-4">
          <a href="YOUR_LINK_URL"> {/* Replace with your intended URL */}
            <img 
              src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1700203717/a05efb698fc43c60c6f372c9e4969a8a-modified_qsf2af.png" 
              alt="Paw Love Logo" 
              style={{ width: '200px', height: 'auto' }} 
            />
          </a>
          <p className="text-muted">"I'm watching you type. No pressure!" </p> 
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn" style={{ backgroundColor: '#f139c8', color: 'white' }}>Submit</button>
         <p>
    Don't have an account? <a href="/register">Register here</a>
</p>
        </form>
      </div>
    </div>
  );
}

export default Login;

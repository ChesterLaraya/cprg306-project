import { auth, githubProvider } from "./firebase"; // Import Firebase setup
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

export default function App() {
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            setUser(result.user); // Save user info after login
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleLogout = async () => {
        await auth.signOut();
        setUser(null);
    };

    return (
        <div>
            <h1>Shoe App</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName}!</p>
                    {user.photoURL && <img src={user.photoURL} alt="Profile" />}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login with GitHub</button>
            )}
        </div>
    );
}

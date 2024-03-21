import './Profile.css'
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Profile = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth)
        navigate("/Home")
    }

  return (
    <div>
      <h1>Welcome Back</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile




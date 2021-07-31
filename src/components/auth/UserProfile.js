import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthProvider"


export const UserProfile = () => {
    const {setToken, setUserDetails, userDetails} = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token", JSON.stringify({isUserLoggedIn: false, token: ""}));
        localStorage.removeItem("userData", JSON.stringify({isUserLoggedIn: false, userData: "" }));
        setToken(null);
        setUserDetails(null);
        navigate("/login");
    }
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col w-1/3 h-auto items-center p-8 border shadow-lg font-sans">
                <div className="p-8 text-lg">
                    <label>Name: </label>
                    <span>{userDetails?.name}</span>
                </div>
                <div className="p-8 text-lg">
                    <label>Email:</label>
                    <span>{userDetails?.email}</span>
                </div>
                <button className="p-4 w-40  border bg-gray-800 text-white text-lg text-center self-center rounded-md font-semibold" onClick={()=>logout()}>Logout</button>
            </div>
        </div>
    )
}
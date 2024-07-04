import AdminNavbar from "../../components/admin/navbar/admin.navbar.tsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {GetAccessToken, RemoveAccessToken} from "../../services/token/token_service.tsx";
import {authService} from "../../services/auth/auth_service_impl.tsx";


export default function AdminLayout() {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        authService.GetProfile(GetAccessToken()).then((res) => {
            const {errorMessage} = res;
            if(errorMessage.length > 0) {
                RemoveAccessToken();
                navigate("/login")
            }
        })
    }, [navigate, location.pathname]);
    return (
      <div>
        <AdminNavbar />
        <Outlet />
      </div>
  )
}

import { Navigate } from "react-router"

export function ProtectedRouteForAdmin ({children}) {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "admin") {
      return children;
    }
    else {
      return <Navigate to={'/login'}/>
    }
}
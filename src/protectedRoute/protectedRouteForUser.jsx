
import { Navigate } from "react-router"

export function ProtectedRouteForUser  ({children}) {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "user") {
      return children;
    }
    else {
      return <Navigate to={'/login'}/>
    }
}
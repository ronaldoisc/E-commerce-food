import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    
    const {username} = useSelector(state => state.auth.user)
        return (
            !!username
            ?   children  
            :  <Navigate to="/login" />
        )              
    }

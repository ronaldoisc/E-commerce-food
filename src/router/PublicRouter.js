import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
 
export const PublicRoute = ({children}) => {
    const {username} = useSelector(state => state.auth.user);

  
  
    return (
         !!username
        ? <Navigate to="/" />
        : children 
        
        )
        
}

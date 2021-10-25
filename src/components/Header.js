import Logout from './Logout'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <header>
            <nav className="nav">
                <div className="container">
                    <a href="#" className="active">Posts</a>
                    
                    <span>{isAuthenticated && user.name}</span>
                    <div><img src={isAuthenticated && user.picture} style={{borderRadius:50}}></img></div>
                    <span><Logout /></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;

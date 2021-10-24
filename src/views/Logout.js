import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    const { logout } = useAuth0();

    return (
        <button className="btn" onClick={() => logout({returnTo: window.location.origin})}>
            SALIR
        </button>
    );
}

export default Logout;

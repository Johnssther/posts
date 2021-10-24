import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login">
            <img src="https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097_960_720.jpg" alt="mascotas"></img>
            <div className="card grid col-1">
                <div className="bg-primary-login text-white">
                    <h3 className="display-3">POSTS</h3>
                </div>
                <div>
                    <button className="btn-login m-1" onClick={() => loginWithRedirect()}>
                        <p>Iniciar sesión</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
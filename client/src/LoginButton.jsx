import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginRounded, Logout } from '@mui/icons-material';

const Login = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    // Effect to persist authentication state to local storage
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            localStorage.removeItem('isAuthenticated');
        }
    }, [isAuthenticated]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {isAuthenticated && (
                    <div className="text-center">
                        <div className="relative inline-block">
                            <img src={user.picture} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-2" />
                            <span className="absolute bottom-0 right-0 inline-block w-6 h-6 bg-blue-600 rounded-full border-2 border-white"></span>
                        </div>
                        <h2 className="text-lg font-bold">{user.name}</h2>
                        <p className="text-sm text-gray-500">Last updated: {user.updated_at}</p>
                        <p className="text-sm text-gray-500">Logged in as : {user.email}</p>
                    </div>
                )}
                <div className="flex justify-center mt-4">
                    {isAuthenticated ? (
                        <button
                            onClick={(e) => logout()}

                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mr-2"
                        >
                            <span className="flex items-center">
                                <Logout className="mr-1" /> Logout
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={(e) => loginWithRedirect()}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            <span className="flex items-center">
                                <LoginRounded className="mr-1" /> Login with Anushka General Store
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;

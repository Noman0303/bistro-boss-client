import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading)
        return <progress className="progress progress-accent w-56" ></progress>

    if (user?.email) {
        return children;
    } else {
        return <Navigate state={{from:location.pathname}} to='/login' replace></Navigate>
    }
};

export default PrivateRoute;
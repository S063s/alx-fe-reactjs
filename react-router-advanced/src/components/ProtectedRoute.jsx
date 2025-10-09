function ProtectedRoute({ element }) {
    const isAuthenticated = false; 
    return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
function ProtectedRoute({ element }) {
    const useAuth = false;
    return useAuth ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
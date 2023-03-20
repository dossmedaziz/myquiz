import Router from "./navigation/Router";
import AuthProvider from "./context/useAuth";

function App() {
    return (
        <AuthProvider>
            <Router/>
        </AuthProvider>

    );
}

export default App;
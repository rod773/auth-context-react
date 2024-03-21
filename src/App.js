import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./router/route";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

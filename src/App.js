import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './common/login';
import AllRoutes from './AllRoutes';
import UserRoutes from './UserRoutes';
import Home from './Home';
import NewUserReg from './admin/modalpopup/NewUserReg';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<AllRoutes />} />
                <Route path="/User/*" element={<UserRoutes />} />
                <Route path="/" element={<Home />} />
                <Route path="/NewUserReg" element={<NewUserReg />} />
            </Routes>
        </Router>
    );
}

export default App;

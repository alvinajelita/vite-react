import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Utama from "./pages/Utama";
import Halamanlogin from "./pages/Halamanlogin";
import Halamanregister from "./pages/Halamanregister";
// import Home from "./pages/Dashboard";
import Homekonten  from "./pages/Homekntn";
import Dashboardlay from "./components/Layouts/Dashboardlay";
import Menu from "./pages/Menukntn";
import Productk from "./pages/Productkntn";
import Users from "./pages/Userskntn";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Utama />} />
        <Route path="/login" element={<Halamanlogin />} />
        <Route path="/register" element={<Halamanregister />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route element={<Dashboardlay />}>
          <Route path="/home" element={<Homekonten />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/user" element={<Users />} />
          <Route path="/produk" element={<Productk />} />
        </Route> 
        {/* <Route path="/kontenhome" element={<Homekonten />} /> */}
      </Routes>
    </Router>
  )
}

export default App;

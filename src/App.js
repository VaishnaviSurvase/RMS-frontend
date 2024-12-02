import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboardmerge from './Admin/DashboardComponent/Dashboardmerge'
import NewOrders from "./Admin/NewOrders/NewOrders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboardmerge />} />
      </Routes>
    </Router>
  );
}

export default App;

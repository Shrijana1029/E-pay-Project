import {Routes, Route} from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/LoginSign/Login";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import ElectricityBillEnquiry from "./component/ElectricityBillEnquiry";
import Team from "./component/Team";
import WaterBillEnquiry from "./component/WaterBillEnquiry";
import Deposit from "./component/Deposit";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Payment from "./component/Payment";
import Admin from "./component/Admin";
import ForgetPassword from "./component/LoginSign/ForgetPassword";
import RecoveryPassword from "./component/LoginSign/RecoveryPassword";

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/Login" element={ <Login /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/Register" element={ <Register /> } />
      <Route path="/Admin " element={ <Admin/> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/ForgetPassword" element={ <ForgetPassword/> } />
      <Route path="/RecoveryPassword" element={ <RecoveryPassword/> } />
    </Routes>
    </>
  );
}

export default App;

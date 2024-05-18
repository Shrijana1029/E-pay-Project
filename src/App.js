import {Routes, Route} from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/LoginSign/Login";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Team from "./component/Team";
import WaterBillEnquiry from "./component/WaterBillEnquiry";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/Login" element={ <Login /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/Register" element={ <Register /> } />
      <Route path="/WaterBillEnquiry" element={ <WaterBillEnquiry/ > } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
    </>
  );
}

export default App;

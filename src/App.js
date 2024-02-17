import { Route,Routes } from "react-router-dom";
import Layout from './layout/Layout';
import Home from "./pages/Home";
import Partners from "./pages/Partners/Partners";
import USRegions from "./pages/US-regions/USRegions";
import InquireNow from "./pages/contact-us/Inquire-now";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="who-we-work-with" element={<Partners/>}/>
        <Route path="US-Regions-served" element={<USRegions/>}/>
        <Route path="Inquire-Now" element={<InquireNow/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

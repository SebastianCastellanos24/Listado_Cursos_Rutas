import { Home } from "./routes/Home";
import { Navbar } from "./routes/Navbar"
import { Routes, Route} from "react-router-dom";
import { Footer } from './components/Footer';

import { Curso1 } from "./routes/Cursos/Curso1";
import { Curso2 } from "./routes/Cursos/Curso2";
import { Curso3 } from "./routes/Cursos/Curso3";
import { Curso4 } from "./routes/Cursos/Curso4";
import { Curso5 } from "./routes/Cursos/Curso5";
import { Curso6 } from "./routes/Cursos/Curso6";
import { Curso7 } from "./routes/Cursos/Curso7";
import { Curso8 } from "./routes/Cursos/Curso8";
import { Curso9 } from "./routes/Cursos/Curso9";
import { Curso10 } from "./routes/Cursos/Curso10";
import { Curso11 } from "./routes/Cursos/Curso11";
import { Curso12 } from "./routes/Cursos/Curso12";
import { Curso13 } from "./routes/Cursos/Curso13";
import { Curso14 } from "./routes/Cursos/Curso14";
import { Curso15 } from "./routes/Cursos/Curso15";
import { Curso16 } from "./routes/Cursos/Curso16";
import { Curso17 } from "./routes/Cursos/Curso17";
import { Curso18 } from "./routes/Cursos/Curso18";
import { Curso19 } from "./routes/Cursos/Curso19";
import { Curso20 } from "./routes/Cursos/Curso20";
import { Curso21 } from "./routes/Cursos/Curso21";
import { Curso22 } from "./routes/Cursos/Curso22";
import { Curso23 } from "./routes/Cursos/Curso23";
import { Curso24 } from "./routes/Cursos/Curso24";
import BtnWhatsApp from "./components/BtnWhatsApp";

function App() {
  return (
    <div className="App relative">
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/curso01" element={<Curso1/>}/>
        <Route path="/curso02" element={<Curso2/>}/>
        <Route path="/curso03" element={<Curso3/>}/>
        <Route path="/curso04" element={<Curso4/>}/>
        <Route path="/curso05" element={<Curso5/>}/>
        <Route path="/curso06" element={<Curso6/>}/>
        <Route path="/curso07" element={<Curso7/>}/>
        <Route path="/curso08" element={<Curso8/>}/>
        <Route path="/curso09" element={<Curso9/>}/>
        <Route path="/curso10" element={<Curso10/>}/>
        <Route path="/curso11" element={<Curso11/>}/>
        <Route path="/curso12" element={<Curso12/>}/>
        <Route path="/curso13" element={<Curso13/>}/>
        <Route path="/curso14" element={<Curso14/>}/>
        <Route path="/curso15" element={<Curso15/>}/>
        <Route path="/curso16" element={<Curso16/>}/>
        <Route path="/curso17" element={<Curso17/>}/>
        <Route path="/curso18" element={<Curso18/>}/>
        <Route path="/curso19" element={<Curso19/>}/>
        <Route path="/curso20" element={<Curso20/>}/>
        <Route path="/curso21" element={<Curso21/>}/>
        <Route path="/curso22" element={<Curso22/>}/>
        <Route path="/curso23" element={<Curso23/>}/>
        <Route path="/curso24" element={<Curso24/>}/>
      </Routes>
      <Footer/>

      <BtnWhatsApp/>
    </div>
  )
}

export default App

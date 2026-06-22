import Home from "./pages/Home.jsx";
import { Routes,Route} from "react-router-dom";
import Pinned from "./pages/Pinned.jsx";
import Settings from "./pages/Settings.jsx";
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pinned' element={<Pinned/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  );
}

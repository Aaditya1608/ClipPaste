import Home from "./pages/Home.jsx";
import { Routes,Route} from "react-router-dom";
import Pinned from "./pages/Pinned.jsx";
import Settings from "./pages/Settings.jsx";
import Splash from "./pages/Splash.jsx";
import { useEffect,useState } from "react";
export default function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },2000);

    return () => clearTimeout(timer);
  },[])
  if(loading){
    return <Splash/>
  }
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pinned' element={<Pinned/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  );
}

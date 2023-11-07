import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Routes>
               <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}/>
                 <Route path='/starred' element={<Starred/>}/>
               </Route>
             <Route path='*' element={<div>Page Not Found</div>}/>
           </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;

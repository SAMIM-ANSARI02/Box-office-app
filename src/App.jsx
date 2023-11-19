import {HashRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/show';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import { GlobalTheme } from './theme/Theme';


// import Show from './pages/show';
const queryClient = new QueryClient()



function App() {
  return (
    <div className="App">
       <QueryClientProvider client={queryClient}>
        <GlobalTheme>
        <HashRouter>
           <Routes>
               <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}/>
                 <Route path='/starred' element={<Starred/>}/>
               </Route>
               <Route path='/show/:showId' element={<Show/>}/>
             <Route path='*' element={<div>Page Not Found</div>}/>
           </Routes>
       </HashRouter>
       </GlobalTheme>
       </QueryClientProvider>
     
    </div>
  );
}

export default App;

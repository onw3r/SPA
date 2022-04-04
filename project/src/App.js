import './App.css';
import MainPage from "./Pages/Main/MainPage";
import FormRegistration from "./Pages/FormPage/FormRegistration";
import FormAuthorization from "./Pages/FormPage/FormAuthorization";
import Catalog from "./Pages/Catalog/Catalog";
import Basket from "./Pages/Basket/Basket";
import Footer from "./Pages/Main/Footer/Footer";
import Header from "./Pages/Main/Header/Header";
import {Outlet, Route, Routes} from "react-router-dom";
import ItemPage from "./Pages/ItemPage/ItemPage";




function App() {


  return (
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<MainPage/>}/>
              <Route path={'catalog'} element={<CatalogLayout/>}>
                  <Route index element={<Catalog/>}/>
                  <Route path={'item-page/:title'} element={<ItemPage/>}/>
              </Route>
              <Route path={'basket'} element={<Basket/>}/>
              <Route path={'item'} element={<ItemPage/>}/>
              <Route path={'registration'} element={<AuthLayout/>}>
                  <Route index element={<FormRegistration/>}/>
                  <Route path={'auth'} element={<FormAuthorization/>}/>
              </Route>
          </Route>
      </Routes>

  );
}
function AuthLayout(){
    return(
        <Outlet/>
    )
}
function CatalogLayout(){
    return(
        <Outlet/>
    )
}

function Layout(){
   return(

       <div className="App">

           <Header/>
           <main className={'main'}>
               <Outlet/>
           </main>
           <Footer/>


       </div>
   )
}
export default App;

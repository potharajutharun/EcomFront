import Men from "./collections/Men";
import Cart from "./collections/Cart";
import RootLayout from './collections/RootLayout';
import Products from "./collections/Products";
import Women from "./collections/Women";
import Kids from "./collections/Kids";
import HomeAndLiving from "./collections/HomeAndLiving";
import Studio from "./collections/Studio";
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Profile from "./collections/Profile";
import WishList from "./collections/WishList";
import Login from "./collections/Login";
import Register from "./collections/Register";

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="Men"  element={<Men/>}></Route>
      <Route path="Women"  element={<Women/>}></Route>
      <Route path="Kids"  element={<Kids/>}></Route>
      <Route path="HomeAndLiving"  element={<HomeAndLiving/>}></Route>
      <Route path="Studio"  element={<Studio/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/wishlist" element={<WishList/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route index element={<Products/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
     <RouterProvider router={router}/>
    
    </div>
  );
}

export default App;

// import './categories.style.scss'
// import CategoryItem from './component/category-item/category.item.component'
// import Directory from "./component/directory/directory.component";

import Home from "./component/Routes/Home/Home.component";

import { Routes, Route } from 'react-router-dom'

import Navigation from "./component/Routes/Navigation/Navigation.component";

import SignIn from "./component/Routes/Sign-in/Sign-in.component";
const App = () =>{
  const Shop = () =>
  {
    return(
      <div>
        <h1>Shop Page</h1>
      </div>
    )
  }


  return(

    <Routes>
    <Route path='/'  element={<Navigation/>}>
     <Route index  element={<Home />}/>
     <Route path="shop"  element={<Shop />}/ >
     <Route path='sign-in' element={<SignIn/>} />
      </Route>
    </Routes>
  
  )
}
export default App;
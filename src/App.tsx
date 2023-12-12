import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Layout from './layouts/main';
import AddNewBook from './pages/AddNewBook';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='book/add' element={<AddNewBook/>}/>
      {/* <Route path='search' element={<Search/>}/>
      <Route path='book/add' element={<AddNewBook/>}/>
      <Route path='book/:bookId' element={<Book/>}/> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

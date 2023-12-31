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
import Search from './pages/Search';
import {RecoilRoot} from 'recoil';
import BookPage from './pages/Book';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='books/add' element={<AddNewBook/>}/>
      <Route path='books/:bookId' element={<BookPage/>}/>
      <Route path='search' element={<Search/>}/>
    </Route>
  )
);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;

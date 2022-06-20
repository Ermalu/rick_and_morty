import React from "react";
import Pokemons from "./Components/Pokemons/Pokemons";
import Pokemons2 from "./Components/Pokemons2/Pokemons2";
import RickAndMorty from "./Components/RickAndMorty/RickAndMorty";
import Users from "./Components/Users/Users";
import AddProduct from "./Components/AddProduct/AddProduct";
import Header from "./Components/Header/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    //! указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* Header будет на всех страничках  */}
      <Header />
      {/* для перечесления роутов  */}
      <Routes>
        {/* не посредственно сами роуты  */}
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons-2" element={<Pokemons2 />} />
        <Route path="/rick" element={<RickAndMorty />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      {/* Footer будет на всех страницах  */}
      <h1>Footer</h1>
    </BrowserRouter>
  );
};

export default App;

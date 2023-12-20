import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import ItemCard from "../ItemCard/ItemCard";
import Footer from "../Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import api from "../../utils/pokeapi";
import ItemModal from "../ItemModal/ItemModal";
import { COLOR__TYPE, MODAL_TYPE } from "../../utils/constants";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [query, setQuery] = useState(null);
  const [ifToggleResult, setIfToggleResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  useEffect(() => {
    const firstType = pokemonData.types?.["0"]?.type.name;
    setFirstColor(COLOR__TYPE[firstType]);

    const secondType = pokemonData.types?.["1"]?.type.name;
    setSecondColor(COLOR__TYPE[secondType]);
  }, [pokemonData]);

  function searchInput(e) {
    setQuery(e.target.value.toLowerCase());
  }

  const handleClick = () => {
    setActiveModal(MODAL_TYPE.PREVIEW);
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const closebyEsc = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", closebyEsc);
    return () => window.removeEventListener("keypress", closebyEsc);
  }, []);

  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    api
      .getPokemon(query)
      .then((pokearray) => {
        setPokemonData(pokearray);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setPokemonData("");
    inputRef.current.value = "";
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main
              value={query}
              searchInput={searchInput}
              onSubmit={onSubmit}
              inputRef={inputRef}
              setIfToggleResult={setIfToggleResult}
            />
            {ifToggleResult && (
              <ItemCard
                isLoading={isLoading}
                pokemonData={pokemonData}
                handleClick={handleClick}
                firstColor={firstColor}
                secondColor={secondColor}
              />
            )}
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>

      {activeModal === MODAL_TYPE.PREVIEW && (
        <ItemModal
          pokemonData={pokemonData}
          onClose={closeModal}
          onClick={handleOverlay}
          firstColor={firstColor}
          secondColor={secondColor}
        />
      )}
    </div>
  );
}

export default App;

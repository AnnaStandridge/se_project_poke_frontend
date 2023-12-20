import React from "react";
import "./Main.css";
import "../App/App.css";

function Main({ query, searchInput, onSubmit, inputRef, setIfToggleResult }) {
  return (
    <main className="main app__section">
      <div className="main__container">
        <h1 className="main__title">Who's that Pokémon?</h1>
        <p className="main__paragraph">
          Type the Pokemon's name or id
          number in the Pokédex to find out more!
        </p>
        <form className="search" onSubmit={onSubmit} noValidate>
          <input
            className="search__input"
            name="search"
            type="search"
            id="search"
            placeholder="Enter name or id number"
            value={query}
            onChange={searchInput}
            ref={inputRef}
            required
            minLength="1"
            maxLength="20"
          ></input>
          <button
            className="search__button"
            type="search"
            onClick={setIfToggleResult}
          >
            Search
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;

import "./ItemCard.css";
import "../Preloader/Preloader.css";

function ItemCard({
  pokemonData,
  isLoading,
  handleClick,
  firstColor,
  secondColor,
}) {
  const hasSecondType = pokemonData.types?.["1"]?.type.name;
  const cardTypeClassName = `card__type ${
    hasSecondType ? "card__type-display" : "card__type"
  } `;

  const secondImage =
    pokemonData.sprites?.versions["generation-v"]["black-white"].animated
      .back_default ||
    pokemonData.sprites?.back_default ||
    pokemonData.sprites?.front_female;
  const secondImageClassName = `card__pokepic ${
    secondImage ? "card__pokepic" : "card__pokepic-hidden"
  } `;

  return (
    <section className="cards">
      {isLoading ? (
        <>
          <div className="preloader"></div>
          <p className="preloader__text">Searching for Pokémon...</p>
        </>
      ) : (
        <>
          {!pokemonData ? (
            <>
              <h1 className="results__header">Nothing Found</h1>
              <p className="results__text">
                Sorry, but nothing matched your search terms.
              </p>
            </>
          ) : (
            <>
              <h1 className="results__header">Result:</h1>
              <div className="card__container" onClick={handleClick}>
                <h1 className="card__name">
                  {pokemonData.name}: #{pokemonData.id}
                </h1>
                <div className="card__type-container">
                  <h2
                    className="card__type"
                    style={{ backgroundColor: firstColor }}
                  >
                    {pokemonData.types?.["0"].type.name}
                  </h2>
                  <h2
                    className={cardTypeClassName}
                    style={{ backgroundColor: secondColor }}
                  >
                    {pokemonData.types?.["1"]?.type.name}
                  </h2>
                </div>
                <img
                  src={
                    pokemonData.sprites?.versions["generation-v"]["black-white"]
                      .animated.front_default ||
                    pokemonData.sprites?.front_default
                  }
                  alt="pokepic-front"
                  className="card__pokepic"
                />
                <img
                  src={
                    pokemonData.sprites?.versions["generation-v"]["black-white"]
                      .animated.back_default ||
                    pokemonData.sprites?.back_default ||
                    pokemonData.sprites?.front_female
                  }
                  alt="pokepic-back"
                  className={secondImageClassName}
                />{" "}
                <p>Click for more information!</p>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default ItemCard;

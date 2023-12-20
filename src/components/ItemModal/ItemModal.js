import "./ItemModal.css";

function ItemModal({ pokemonData, onClose, onClick, firstColor, secondColor }) {
  const hasSecondType = pokemonData.types?.["1"]?.type.name;
  const cardTypeClassName = `item-modal__type ${
    hasSecondType ? "item-modal__type-display" : "item-modal__type"
  } `;

  const secondAbility = pokemonData.abilities?.[1]?.is_hidden === false;
  const secondaryAbilityClassName = `item-modal__ability-second ${
    secondAbility ? "item-modal__ability-second" : "item-modal__hidden-ability"
  } `;

  const hasHidden =
    pokemonData.abilities?.[2]?.is_hidden ||
    pokemonData.abilities?.[1]?.is_hidden === true;
  const hiddenAbilityClassName = `item-modal__ability ${
    hasHidden ? "item-modal__ability" : "item-modal__hidden-ability"
  } `;

  const kilograms = pokemonData.weight / 10;
  const pounds = (kilograms * 2.205).toFixed(1);

  const meters = pokemonData.height / 10;
  const totalHeight = meters * 39.57;
  const feet = Math.floor(meters * 3.28);
  const inches = Math.floor(totalHeight - feet * 12);

  return (
    <div className="item-modal" onClick={onClick}>
      <div className="item-modal__container">
        <button
          onClick={onClose}
          type="button"
          className="item-modal__close"
          alt="close button"
        />

        <div className="item-modal__header">
          <p className="item-modal__name">
            {pokemonData.name} / {pokemonData.id}
          </p>
          <div className="item-modal__types">
            <h2
              className="item-modal__type"
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
        </div>

        <div className="item__image-container">
          <img
            src={
              pokemonData.sprites?.versions["generation-v"]["black-white"]
                .animated.front_default || pokemonData.sprites?.front_default
            }
            alt="pokepic-front"
            className="item__image"
          />
          <img
            src={
              pokemonData.sprites?.versions["generation-v"]["black-white"]
                .animated.back_default ||
              pokemonData.sprites?.back_default ||
              pokemonData.sprites?.front_female
            }
            alt="pokepic-back"
            className="item__image"
          />
        </div>
        <div className="item-modal__info">
          <div className="item-modal__default-abilities">
            <p className="item-modal__ability">
              Abilities{":"} {pokemonData.abilities?.[0]?.ability?.name}
            </p>
            <p className={secondaryAbilityClassName}>
              {"  or "}
              {pokemonData.abilities?.[1]?.ability?.name}
            </p>
          </div>
          <p className={hiddenAbilityClassName}>
            Hidden Ability{":"}{" "}
            {pokemonData.abilities?.[2]?.ability?.name ||
              pokemonData.abilities?.[1]?.ability?.name}
          </p>
          <div className="item-modal__description">
            Size:
            <p className="item-modal__text">
              Weight: {kilograms} kg or {pounds} ibs
            </p>
            <p className="item-modal__text">
              Height: {meters} meters or {feet}"{inches}'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

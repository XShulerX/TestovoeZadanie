import React from "react";
import CardItem from "./CardItem";

const CardList = ({cards, setModal}) => {
    if (!cards.length) {
        return <h1>Карточки не найдены!</h1>;
    }
    return (
        <div className="CardList">
            {cards.map((card, index) => (
                <CardItem setModal={setModal} card={card} key={index} />
            ))}
        </div>
    );
};

export default CardList;

import React from "react";

const CardItem = (props) => {
    return (
        <div className="CardItem" onClick={() => props.setModal({card: props.card, visible: true})}>
            <div className="FIO">{props.card.name}</div>
            <div className="phone">
                <a href={"tel:" + props.card.phone}>{props.card.phone}</a>
            </div>
            <div className="email">
                <a href={props.card.email}>{props.card.email}</a>
            </div>
        </div>
    );
};

export default CardItem;

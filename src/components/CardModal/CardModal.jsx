import React from "react";
import classes from "./CardModal.module.css";

const CardModal = (props) => {
    const rootClasses = [classes.CardModal];
    if (props.modal.visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div
            className={rootClasses.join(" ")}
            onClick={() => props.setVisible({ card: {}, visible: false })}
        >
            <div
                className={classes.CardModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h1 className={classes.nameTitle}>{props.modal.card.name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Телефон:</td>
                            <td><a href={"tel:"+props.modal.card.phone}>{props.modal.card.phone}</a></td>
                        </tr>
                        <tr>
                            <td>Почта:</td>
                            <td><a href={props.modal.card.email}>{props.modal.card.email}</a></td>
                        </tr>
                        <tr>
                            <td>Дата приема:</td>
                            <td>{props.modal.card.hire_date}</td>
                        </tr>
                        <tr>
                            <td>Должность:</td>
                            <td>{props.modal.card.position_name}</td>
                        </tr>
                        <tr>
                            <td>Подразделение:</td>
                            <td>{props.modal.card.department}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <span className={classes.moreInfo}>Дополнительная информация: </span>
                    <br />
                    {props.modal.card.address}
                </div>
                <div
                    className={classes.closeButton}
                    onClick={() =>
                        props.setVisible({ card: {}, visible: false })
                    }
                >
                    X
                </div>
            </div>
        </div>
    );
};

export default CardModal;

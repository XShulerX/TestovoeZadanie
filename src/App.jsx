import "./App.css";
import CardList from "./components/CardList";
import React, { useEffect, useState } from "react";
import { useFetching } from "./hooks/useFetching";
import CardsService from "./API/CardsService";
import { useCards } from "./hooks/useCards";
import CardFilter from "./components/CardFilter";
import CardModal from "./components/CardModal/CardModal";

function App() {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState("");
    const [modal, setModal] = useState({card: {},visible: false});
    const searchedCards = useCards(cards, query);

    const [fetchCards, isCardsLoading, cardError] = useFetching(async () => {
        const response = await CardsService.getAll();
        setCards(response.data);
    });

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className="App">
            <CardModal modal={modal} setVisible={setModal}/>
            <CardFilter query={query} setQuery={setQuery} />
            {isCardsLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                    }}
                >
                    ...
                </div>
            ) : (
                <CardList setModal={setModal} cards={searchedCards} />
            )}
        </div>
    );
}

export default App;

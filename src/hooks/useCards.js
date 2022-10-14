import { useMemo } from "react";

export const useSortedCards = (cards, sort) => {
    const sortedcards = useMemo(() => {
        if (sort) {
            return [...cards].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return cards;
    }, [sort, cards]);

    return sortedcards;
};

export const useCards = (cards, query) => {
    const searchedCards = useMemo(() => {
        return cards.filter((card) =>
            card.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, cards]);

    return searchedCards;
};

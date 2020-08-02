import React, { useState, useEffect, useMemo } from 'react';

import PokemonCard from '../../components/PokemonCard';
import useDebounce from '../../hooks/useDebounce';
import api from '../../services/api';
import { Search } from './styles';

interface Card {
  id: string;
  name: string;
  imageUrl: string;
  types: string[];
}

interface Cards {
  cards: Card[];
}

const PokemonList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState<Card[]>([]);

  const debouncedSearch = useDebounce(search, 500);

  const sortedCards = useMemo(() => {
    return cards.sort((a, b) => (a.name > b.name ? 1 : -1));
  }, [cards]);

  useEffect(() => {
    async function loadCards(): Promise<void> {
      const { data } = await api.get<Cards>(`/cards?name=${debouncedSearch}`);

      setCards(data.cards);
    }

    loadCards();
  }, [debouncedSearch]);

  return (
    <main className="wrap container-fluid">
      <Search>
        <span>Search card by name:</span>
        <input type="text" onChange={e => setSearch(e.target.value)} />
      </Search>
      <section className="row">
        {sortedCards.map(card => (
          <div key={card.id} className="col-md-3 col-sm-4 col-xs-12">
            <PokemonCard card={card} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default PokemonList;

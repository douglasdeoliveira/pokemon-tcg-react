import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface PokemonCardProps {
  card: {
    id: string;
    name: string;
    imageUrl: string;
    types: string[];
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ card }) => {
  return (
    <Container>
      <Link to="/card">
        <div className="card__header">
          <img src={card.imageUrl} alt={`Card ${card.name}`} />
        </div>
        <div className="card__body">
          <p>
            <strong>ID:</strong> {card.id}
          </p>
          <p>
            <strong>Name:</strong> {card.name}
          </p>
          {card.types && (
            <p>
              <strong>Types:</strong> {card.types.toString()}
            </p>
          )}
        </div>
      </Link>
    </Container>
  );
};

export default PokemonCard;

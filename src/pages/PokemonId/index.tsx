import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { Container, TableContainer, BackButton } from './styles';

interface Attack {
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

interface Resistance {
  type: string;
  value: string;
}

interface Weakness {
  type: string;
  value: string;
}

interface PokemonCard {
  id: string;
  name: string;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  attacks: Attack[];
  resistances: Resistance[];
  weaknesses: Weakness[];
}

interface Card {
  card: PokemonCard;
}

interface RouteParams {
  card_id: string;
}

const PokemonId: React.FC = () => {
  const [card, setCard] = useState<PokemonCard>({} as PokemonCard);

  const history = useHistory();
  const { card_id } = useParams<RouteParams>();

  useEffect(() => {
    async function loadCard(): Promise<void> {
      const { data } = await api.get<Card>(`/cards/${card_id}`);

      setCard(data.card);
    }

    loadCard();
  }, [card_id]);

  const goBack = useCallback(() => {
    history.go(-1);
  }, [history]);

  return (
    <Container className="wrap container-fluid">
      <section className="row">
        <div className="col-md-5 col-sm-12 col-xs-12">
          <div className="card__image">
            <img src={card.imageUrlHiRes} alt={`Card ${card.name}`} />
          </div>
        </div>
        <div className="col-md-7 col-sm-12 col-xs-12">
          <div className="card__info">
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

            {card.attacks && (
              <TableContainer>
                <table role="table">
                  <caption style={{ backgroundColor: '#03a9f4' }}>
                    Attacks
                  </caption>
                  <thead>
                    <tr role="row">
                      <th scope="col" role="columnheader">
                        Name
                      </th>
                      <th scope="col" role="columnheader">
                        Description
                      </th>
                      <th scope="col" role="columnheader">
                        Damage
                      </th>
                      <th scope="col" role="columnheader">
                        Energy Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.attacks.map((attack, i) => (
                      <tr key={String(i)} role="row">
                        <td role="cell" data-title="Name">
                          {attack.name}
                        </td>
                        <td role="cell" data-title="Description">
                          {attack.text}
                        </td>
                        <td role="cell" data-title="Damage">
                          {attack.damage}
                        </td>
                        <td role="cell" data-title="Energy Cost">
                          {attack.convertedEnergyCost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableContainer>
            )}

            {card.resistances && (
              <TableContainer>
                <table role="table">
                  <caption style={{ backgroundColor: '#4caf50' }}>
                    Resistances
                  </caption>
                  <thead>
                    <tr role="row">
                      <th scope="col" role="columnheader">
                        Type
                      </th>
                      <th scope="col" role="columnheader">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.resistances.map((resistance, i) => (
                      <tr key={String(i)} role="row">
                        <td role="cell" data-title="Type">
                          {resistance.type}
                        </td>
                        <td role="cell" data-title="Value">
                          {resistance.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableContainer>
            )}

            {card.weaknesses && (
              <TableContainer>
                <table role="table">
                  <caption style={{ backgroundColor: '#f44336' }}>
                    Weaknesses
                  </caption>
                  <thead>
                    <tr role="row">
                      <th scope="col" role="columnheader">
                        Type
                      </th>
                      <th scope="col" role="columnheader">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.weaknesses.map((weakness, i) => (
                      <tr key={String(i)} role="row">
                        <td role="cell" data-title="Type">
                          {weakness.type}
                        </td>
                        <td role="cell" data-title="Value">
                          {weakness.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableContainer>
            )}
          </div>

          <BackButton type="button" className="btn--back" onClick={goBack}>
            Back
          </BackButton>
        </div>
      </section>
    </Container>
  );
};

export default PokemonId;

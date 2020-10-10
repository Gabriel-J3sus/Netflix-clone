import React from 'react';

import { Container, ListArea, List, Item } from './styles';

const MovieRow = ({ title, items }) => {
  return (
    <Container>
      <h2> {title} </h2>

      <ListArea>
        <List>
          {items.results.length > 0 && items.results.map((item, key) => (
            <Item key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </Item>
          ))}
        </List>
      </ListArea>
    </Container>
  );
};

export default MovieRow;

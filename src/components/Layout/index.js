import React, { useEffect, useState } from 'react';

import api from '../../Services/api';

import FeaturedMovie from '../FeaturedMovie';
import MovieRow from '../MovieRow';

function Layout() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
      const loadAll = async () => {
        //Pegando a lista todal
        let list = await api.getHomeList();
        setMovieList(list)
      }
  
      loadAll();
    }, []);
  
    return (
      <div className="page">

        <FeaturedMovie />

        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>
      </div>
  );
}

export default Layout;
import React, { useEffect, useState } from 'react';

import api from '../../Services/api';

import FeaturedMovie from '../FeaturedMovie';
import MovieRow from '../MovieRow';

function Layout() {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
      const loadAll = async () => {
        //Pegando a lista todal
        let list = await api.getHomeList();
        setMovieList(list)

        //Pegando o Featured
        let originals = list.filter(i => i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');

        setFeaturedData(chosenInfo);
      }
  
      loadAll();
    }, []);
  
    return (
      <div className="page">

        {featuredData && 
          <FeaturedMovie item={featuredData} />
        }

        <section className="lists" style={{marginTop: '-150px'}}>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>
      </div>
  );
}

export default Layout;
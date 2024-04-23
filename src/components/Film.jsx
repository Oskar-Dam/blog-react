/* eslint-disable react/prop-types */
import fakeImage from '../assets/no-image.webp';
import AccordionList from './AccordionList';

function Film(props) {
  const {
    films,
    shortFilms,
    tvShows,
    videoGames,
    parkAttractions,
    allies,
    enemies,
    sourceUrl,
    name, 
    imageUrl} = props.film;
    
  return (
    <div className="film-card">
        <h2><a href={sourceUrl} target='_blank'>{name}</a></h2>
        <a href={sourceUrl} target='_blank'><img className="img-film" src={imageUrl ? imageUrl : fakeImage}></img></a>
        <AccordionList data={films} title="FILMS" />
        <AccordionList data={shortFilms} title="SHORT FILMS" />
        <AccordionList data={tvShows} title="TV SHOWS" />
        <AccordionList data={videoGames} title="VIDEOGAMES" />
        <AccordionList data={parkAttractions} title="PARK ATTRACTIONS" />
        <AccordionList data={allies} title="ALLIES" />
        <AccordionList data={enemies} title="ENEMIES" />     
    </div>
  )
}

export default Film  
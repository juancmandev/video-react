import React from 'react';
import { connect } from 'react-redux';
import { setFavorite } from '../actions';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/img/play-icon.png';
import plusIcon from '../assets/img/plus-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRaiting, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRaiting,
      duration,
    });
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={playIcon}
            alt='Play Icon'
          />
          <img
            className='carousel-item__details--img'
            src={plusIcon}
            alt='Plus Icon'
            onClick={handleSetFavorite}
          />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRaiting} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRaiting: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

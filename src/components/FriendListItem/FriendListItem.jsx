import React from 'react';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={css.item} key={id}>
      {isOnline ? (
        <span className={`${css.status} ${css.error}`}></span>
      ) : (
        <span className={`${css.status} ${css.success}`}></span>
      )}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

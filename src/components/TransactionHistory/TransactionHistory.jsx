import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.transaction__history}>
      <thead>
        <tr className={css.title}>
          <th className={css.titleItem}>Type</th>
          <th className={css.titleItem}> Amount</th>
          <th className={css.titleItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.item} key={item.id}>
            <td className={css.itemType}>{item.type}</td>
            <td className={css.itemName}>{item.amount}</td>
            <td className={css.itemName}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

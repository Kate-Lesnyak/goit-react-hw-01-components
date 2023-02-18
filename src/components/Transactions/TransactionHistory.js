import PropTypes from 'prop-types';
import { Transaction } from './Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <caption>History of transactions</caption>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {items.map(item => (
            <tr key={item.id}>
              <Transaction transaction={item} />
            </tr>
          ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

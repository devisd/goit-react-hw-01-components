import propTypes from 'prop-types';
import transactions from './transactions.json';
import css from './TransactionHistory.module.css';

export const TransactionHistory = () => {
    const component = transactions.map(el => {
        return <tr key={el.id}>
                <td>{el.type}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
               </tr>
    })

    return <table className={css.transaction_history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {component}
            </tbody>
           </table>
}

TransactionHistory.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
}
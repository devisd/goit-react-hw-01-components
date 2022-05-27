import propTypes from 'prop-types';
import friends from './friends.json';
import css from './FriendList.module.css';

export const FriendList = () => {
  const component = friends.map(el => {
    return <li className={css.item} key={el.id}>
             <span className={`${css.isOnline} ${css[el.isOnline]}`}>{el.isOnline}</span>
             <img className={css.avatar} src={el.avatar} alt="User avatar" />
             <p className={css.name}>{el.name}</p>
           </li>
  })
    
    return <ul className={css.friendlist}>
             {component}
           </ul>
}

FriendList.propTypes = {
  isOnline: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
}
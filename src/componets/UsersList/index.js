import React    from 'react';
import UserCard from '../UserCard';
import styles   from './UsersList.module.css';

function UsersList(props) {

  return (
      <ol className={styles.container}>
        {props.users.map(user => (
          <li key={user.id} className={styles.listItem}>
            <UserCard user={user}/>
          </li>
        ))}
        {
          props.children
        }
      </ol>
  );
}

export default UsersList;
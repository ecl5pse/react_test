import React from 'react';
import  styles from './UserCard.module.css'

function UserCard (props) {
   const {user} = props;
   return(
       <div className={styles.container}>
         <div className={styles.fullName}>{`${user.firstName} ${user.lastName}`}</div>
         <img  className={styles.profileImage} src={user.profileImage} alt="user profile"/>
       </div>
   )

}
export default UserCard;
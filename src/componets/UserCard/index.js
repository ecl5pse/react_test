import React , {Fragment} from 'react';
import  styles from './UserCard.module.css'

function UserCard (props) {
  return(
    <Fragment>
        <div style={styles}>
          {
            props.user.firstName
          }

          {
            props.user.lastName
          }
        </div>

      <div>
        {
          props.user.email
        }
      </div>
        <img src={props.user.profileImage}/>
    </Fragment>)
}
export default UserCard;
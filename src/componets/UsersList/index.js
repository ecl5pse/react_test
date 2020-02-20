import React, { Component } from 'react';
import styles               from './UsersList.module.css';
import Avatar               from '../Avatar';
import UserCard             from '../UserCard';
import {loadJson}           from '../../utils';

class UsersList extends Component {

  constructor (props) {
    super( props );
    this.state = {
      isFetching: true,
      users: [],
      error: null,
    };
  }

 componentDidMount () {

loadJson('./users.json' )
     .then( data => {
      this.setState( {
                       users: data,
                       isFetching: false,
                     } );
    } )
     .catch( err => {
      this.setState( {
                       error: err,
                       isFetching: false,
                     } );
    } );
  }

  renderUsers = () => {
    const { users } = this.state;
    return users.map( user => (
        <li key={user.id}>
          <UserCard user={user}/>
        </li>
    ) );
  };

  renderAvatar = () => {
    const { isFetching } = this.state;
    if (isFetching) {
      return <Avatar/>;
    }
  };

  render () {

    return (
        <ol className={styles.container}>
          {
            this.renderUsers()
          }
          {
            this.renderAvatar()
          }
        </ol>
    );
  }

}

export default UsersList;
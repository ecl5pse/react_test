import React, {Component} from 'react';
import {loadJson} from '../../utils';

class UserList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount = async ()=>{
          const  users = await loadJson('./users.json');
          console.table(users);
        };

  renderUser = () => {
    const {users} = this.state;
    return users.map(({id, firstName, lastName}) => {

      return (
          <li key={id}>
            {`${firstName} ${lastName}`})
          </li>);
    });

  };

  render() {
    return null;
  }
}

export default UserList;
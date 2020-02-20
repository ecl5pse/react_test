import React, {Component} from 'react';
import UsersList          from '../UsersList';
import Spinner            from '../Spinner';
import {loadJson}         from '../../utils';

class ListDataLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      items: [],
      error: null,
    };

  }


  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    this.setState({
                    isFetching: true,
                  });

    loadJson(`http://192.168.0.103:5001/admin/users?offset=${this.state.items.length}&limit=${100}`)
    .then(data => {
      this.setState = {
        items: this.state.items.concat(data),
        isFetching: false,
      };
    })
        .catch(err =>{
          this.setState({
            error:err,
            isFetching:false
                        })
    })

  };

  render() {
    return (
        <UsersList users={this.state.items}>
          {
            this.state.isFetching && <Spinner/>
          }



        </UsersList>
    );
  }
}

export default ListDataLoader;
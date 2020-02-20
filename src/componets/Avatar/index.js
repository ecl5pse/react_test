import React        from 'react';
import ColorHash    from 'color-hash';
import PropTypse from 'prop-types';



const  colorHash = new ColorHash();


class Avatar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }


onErrorHandler = (e)=>{
    this.setState({
      error: e.error,
    });
  };






  render() {

    if (this.state.error) {
      return <div></div>;
    } else {
      return (

          <img {...this.props} onError={this.onErrorHandler}/>
      );

    }

  };
}

Avatar.propsTypes ={

  class:PropTypse.string.isRequired,
  src:PropTypse.string.isRequired,
  alt:PropTypse.string.isRequired,
  firstName:PropTypse.string.isRequired,
  lastName:PropTypse.string.isRequired,

};


Avatar.defaultProps = {

};




export default Avatar;
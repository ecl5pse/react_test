import React from 'react';

class Avatar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,

    };
  }

  onErrorHandler = (e)=>{
    this.setState({
      error:e.error,
    });


  };






  render() {

    if (this.state.error) {
      return <div style={{}}>{}</div>;
    } else {
      return (
          <img className={this.state} src="" alt=""/>
      );
    }

  }
}

export default Avatar;
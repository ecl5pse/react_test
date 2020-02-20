import React       from 'react';
import ColorHash   from 'color-hash';
import {loadJson} from '../../utils';
import  style from './Avatar.module.css'

const  colorHash = new ColorHash();


class Avatar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items:[]
    };
  }


onErrorHandler = (e)=>{
    this.setState({
      error:e.error,
    });


  };

componentDidMount() {
   loadJson('./users.json')
   .then(res=> { this.setState({
                          items: res.items,
                          error: false
         })
   }),
       (error) =>{
         this.setState({
           error: error
                       })
   }
}

  render() {

    if (this.state.error) {
      return <div style={{}}>{}</div>;
    } else {
      return (

          this.state.items.map(
              item=> (
                  <img key={item.id} className={style} src={item.imageSrc} alt ={colorHash.hash(item.firstName + item.lastName)}/>
              ))
      );
    }

  }
}

export default Avatar;
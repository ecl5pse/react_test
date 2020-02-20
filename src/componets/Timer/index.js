import React , {Component , Fragment }from 'react';
import Moment from 'moment';


class Timer extends Component{

constructor(props) {
  super(props);
  this.state ={
   date: '',
  isRun:false,
  };

}

update=()=>{

  this.setState({
    date: Moment().format("m:ss"),
  });

};

handleClick = (e)=>{

};

  componentDidMount() {
    this.timerID = setInterval(
        () => this.update(),
        1
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(){
    return (
        <Fragment>
        <h1>{this.state.date}</h1>
          <button>  {
            this.state.isRun?'stop':'start'
          }

          </button>
          <button onClick={()=>{
            this.setState({
       /*       isRun:*/
            })
          }}>

          </button>
        </Fragment>
    )
  }
}

export  default  Timer;
import '../App.css';
import React from "react";
import {TileWrapper} from './TileWrapper'
import {Header} from './Header'
import {data} from '../data'
import { Loading } from '../Loading';

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        total_likes: 0,
        data: null
    };
  }

  componentDidMount(){
    // get data
    setTimeout(()=> {
      this.setState({data})
    }, 1000)
  }

  updateTotalLikes = () => {
      this.setState((prevState)=>{
          return {total_likes: prevState.total_likes + 1}
      })
  }
  render(){
  const {data, total_likes} = this.state
    return (
      <div>
        <Header total_likes={total_likes}/>
        {data ? <TileWrapper updateTotalLikes={this.updateTotalLikes} data={data}/> : <Loading/>}
      </div>
    );
  }
}

export default App;

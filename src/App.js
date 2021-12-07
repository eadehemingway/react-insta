import './App.css';
import React from "react";
import {TileWrapper} from './TileWrapper'
import {Header} from './Header'

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        total_likes: 0
    };
  }

  updateTotalLikes = () => {
      this.setState((prevState)=>{
          return {total_likes: prevState.total_likes + 1}
      })
  }
  render(){
    return (
      <div className="App">
        <Header total_likes={this.state.total_likes}/>
        <TileWrapper updateTotalLikes={this.updateTotalLikes}/>
      </div>
    );
  }
}

export default App;

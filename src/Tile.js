import React from "react";

export class Tile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
      }

    likePhoto=()=>{
        this.setState((prevState)=>{
            return {likes: prevState.likes+1}
        })
    }
    render(){
      return (
        <div className="tile">
            <img className="tile-image" alt="art" src={this.props.src}/>
            <p>likes: {this.state.likes}</p>
            <button onClick={this.likePhoto}>Like</button>
        </div>
  );
}
}


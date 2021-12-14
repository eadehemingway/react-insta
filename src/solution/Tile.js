import React from "react";

export class Tile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
      }

    likePhoto = () => {
        this.setState((prevState)=>{
            return {likes: prevState.likes+1}
        })
        this.props.updateTotalLikes()
    }

    render(){
        const {likes} = this.state
        const red = likes*20;
        const styleObj = {
            border: `10px solid rgb(${red}, 0, 0)`
        }
      return (
        <div style={styleObj} className="tile">
            <img className="tile-image" alt="art" src={this.props.src}/>
            {!!this.state.likes && <p>likes: {likes}</p>}
            <button onClick={this.likePhoto}>Like</button>
        </div>
  );
}
}


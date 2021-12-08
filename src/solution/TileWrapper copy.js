
import React from "react";
import {Tile} from './Tile'


export class TileWrapper extends React.Component{

    render(){
    return (
      <div className="tile-wrapper">
                {this.props.data.map((d, i)=> <Tile key={i} src={d} updateTotalLikes={this.props.updateTotalLikes}/>)}
      </div>
    );
  }
}


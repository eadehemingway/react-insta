
import React from "react";
import {Tile} from './Tile'
import {data} from './data'


export class TileWrapper extends React.Component{


    render(){
    return (
      <div className="tile-wrapper">
            {data.map((d, i)=> <Tile key={i} src={d} updateTotalLikes={this.props.updateTotalLikes}/>)}
      </div>
    );
  }
}


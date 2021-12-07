
import {Tile} from './Tile'
import {data} from './data'

export function TileWrapper() {

    return (
      <div className="tile-wrapper">
            {data.map(d=> <Tile src={d}/>)}
      </div>
    );
  }


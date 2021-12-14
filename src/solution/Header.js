

export function Header(props) {
    return (
    <div className="header-wrapper">
      <h1 className="header-title">
        Works of Cy Twombly
      </h1>
      <h4 className="header-total-likes">total likes: {props.total_likes}</h4>
      </div>
    );
  }



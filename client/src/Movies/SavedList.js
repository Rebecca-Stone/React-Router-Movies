import React from "react";

// imported useHistory
import { useHistory } from "react-router-dom";

export default function SavedList(props) {
  //added a function to add functionality to the home button
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={goHome}>
        Home
      </div>
    </div>
  );
}

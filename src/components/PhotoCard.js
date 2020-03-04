import React from "react";

const PhotoCard = props => {
  return (
    <div className="photo-card" key={props.id}>
      <h4>Copyright: {props.copyright}</h4>  
      <h2>Title: {props.title}</h2>
      <p>{props.explanation}</p>
        <div>{props.media_type}</div>

    </div>
  );
};
export default PhotoCard;

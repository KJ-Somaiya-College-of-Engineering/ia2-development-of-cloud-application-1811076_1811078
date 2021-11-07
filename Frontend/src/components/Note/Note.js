import React from "react";

function Note(props) {
  const handleClick = () => props.onDelete(props.id);

  const handleFavouriteClick = () => {
    props.updateFavourite(props.id, !props.isFavourite)
    props.setAlert(true)
  };
  
  const heartIcon = () => 
    (<svg 
      width="16" height="16"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg" 
      fillRule="evenodd" clipRule="evenodd">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
    </svg>
    );
  
  const filledHeartIcon = () => 
  (
    <svg 
    width="16" height="16" 
    viewBox="0 0 24 24">
    xmlns="http://www.w3.org/2000/svg" 
      <path fill="red" d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/>
      </svg>
  )

  const trashIcon = () =>
      (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="16" height="16"
        viewBox="0 0 24 24"
        style={{fill:"#000000"}}>
          <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z">
          </path>
        </svg>
      );

  const formatDate = (d) => {
    const date = new Date(d);
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="note">
      <h1 className="noteTitle">{props.title}</h1>
      <p className="noteContent">{props.content}</p>
      <div className="NoteFooter">
        <p className="creationDate">{formatDate(props.creationDate)}</p>
        <div className="NoteButtonGroup">
          <button className="favouriteNoteButton" onClick={handleFavouriteClick}>{props.isFavourite ? filledHeartIcon() : heartIcon()}</button>
          <button className="deleteNoteButton" onClick={handleClick}>{trashIcon()}</button>
        </div>
      </div>
    </div>
  );
}

export default Note;
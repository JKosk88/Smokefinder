import * as React from "react";

const AuthorCard = ({ text, image, alt }) => {
  return (
    <div className="author-card">
      <p>{text}</p>
      <img src={image} alt={alt} className="author-image" />
    </div>
  );
};
export default AuthorCard;

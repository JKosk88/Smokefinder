import * as React from "react"
import arrowDown from "../images/image-arrow.svg"
import redLine from "../images/red-line.svg"

const ImageCard = props => (
  <div className="info-card image-card">
    <img src={redLine} alt="red line" className="line" />
    <div>
      <div className="info-card_header green-text">
        <p className="title">{props.title}</p>
      </div>
      <p className="description grey-text">{props.description}</p>
    </div>
    <div className="image-wrapper">
      <img src={props.image} alt={props.title} className="image" />
      <div className="arrows">
        <img src={arrowDown} alt="arrow-icon" className="arrow1" />
        <img src={arrowDown} alt="arrow-icon" className="arrow2" />
        <img src={arrowDown} alt="arrow-icon" className="arrow3" />
      </div>
    </div>
  </div>
)

export default ImageCard

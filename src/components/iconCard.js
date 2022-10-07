import * as React from "react"

const IconCard = props => (
  <>
    <div className="info-card desktop">
      <div className="info-card_header">
        <img src={props.icon} alt={props.title} className="icon" />
        <p
          className={`title ${
            props.greenText ? "green-text" : "ligth-grey-text"
          }`}
        >
          {props.title}
        </p>
      </div>
      <p className="description grey-text">{props.description}</p>
    </div>
    <div className="info-card tablet">
      <img src={props.icon} alt={props.title} className="icon" />
      <div className="info-card_header">
        <p
          className={`title ${
            props.greenText ? "green-text" : "ligth-grey-text"
          }`}
        >
          {props.title}
        </p>
        <p className="description grey-text">{props.description}</p>
      </div>
    </div>
  </>
)

export default IconCard

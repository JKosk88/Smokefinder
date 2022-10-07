import * as React from "react"
import triangleWhite from "../images/triangle-white.svg"
import triangleGreen from "../images/triangle-green.svg"

const SectionTitle = props => {
  const renderTrinagle = () =>
    props.color === "white" ? (
      <img
        src={triangleWhite}
        alt="white triangle"
        className="section-title_triangle"
      />
    ) : (
      <img
        src={triangleGreen}
        alt="green triangle"
        className="section-title_triangle"
      />
    )
  return (
    <div className={`section-title ${props.color === "white" ? "green" : ""}`}>
      {props.renderTrinagle && renderTrinagle()}
      <p className="title">{props.title}</p>
    </div>
  )
}
export default SectionTitle

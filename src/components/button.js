import * as React from "react"

const Button = props => {
  const handleClick = () => {
    props.click && props.click()
  }
  return (
    <button
      className={`button-wrapper ${props.class ? props.class : ""}`}
      onClick={handleClick}
    >
      <p className="button">{props.text}</p>
    </button>
  )
}

export default Button

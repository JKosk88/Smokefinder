import * as React from "react"
import data from "../content/content.json"
import clock from "../images/clock-icon.svg"
import moneyDown from "../images/money-down-icon.svg"
import location from "../images/location-icon.svg"
import InfoCards from "./infoCards"

const Effects = () => {
  const icons = [clock, moneyDown, location]
  return (
    <div className="benefits">
      <InfoCards
        data={data.benefits}
        icons={icons}
        green={true}
        greenText={true}
      />
    </div>
  )
}
export default Effects

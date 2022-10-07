import * as React from "react"
import data from "../content/content.json"
import treesIcon from "../images/trees-icon.svg"
import moneyUp from "../images/money-up-icon.svg"
import co2 from "../images/co2-icon.svg"
import InfoCards from "./infoCards"

const Effects = () => {
  const icons = [treesIcon, moneyUp, co2]
  return (
    <div className="effects">
      <InfoCards data={data.effects} icons={icons} />
    </div>
  )
}
export default Effects

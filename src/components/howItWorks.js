import * as React from "react"
import data from "../content/content.json"
import detecting from "../images/detecting-image.svg"
import analyzing from "../images/analyzing-image.svg"
import informing from "../images/informing-image.svg"
import fighting from "../images/fighting-image.svg"
import InfoCards from "./infoCards"

const HowItWorks = () => {
  const images = [detecting, analyzing, informing, fighting]
  return (
    <div className="howItWorks">
      <InfoCards
        data={data.howItWorks}
        images={images}
        color="green"
        greenText={true}
      />
    </div>
  )
}
export default HowItWorks

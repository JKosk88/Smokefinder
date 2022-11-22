import * as React from "react"
import Home from "../components/home"
import Effects from "../components/effects"
import Benefits from "../components/benefits"
import HowItWorks from "../components/howItWorks"
import Footer from "../components/footer"
import Seo from "../components/seo"
import InfoFooter from "../components/infoFooter";

const IndexPage = () => (
  <>
    <Seo />
    <Home />
    <Effects />
    <Benefits />
    <HowItWorks />
    <Footer />
    <InfoFooter />
  </>
)

export default IndexPage

import ListOrder from "../../components/ListOrder"
import NewOrder from "../../components/NewOrder"
import { useState } from "react"
import Charts from "../Charts"

function RelatoryPainel() {
  return (
    <>
      <div className="relatory_main">
        Relarotio
        <div className="charts">
          <Charts></Charts>
        </div>
      </div>
    </>
  )
}
export default RelatoryPainel

import React, { useState } from "react"
import "./styles.scss"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Pie, Line } from "react-chartjs-2"
import { useAllOrders } from "../../hooks/useAllOrders"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
)

function Charts() {
  let completeOrder = 0
  let progressOrder = 0
  let canceledOrder = 0
  var line_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const
      }
      // title: {
      //   display: true,
      //   text: ""
      // }
    }
  }

  const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]
  const date = new Date()
  const year = date.getFullYear()
  const date_month = date.getMonth()
  const month = labels[date_month]
  const { allOrderList } = useAllOrders()

  allOrderList.map((item) => {
    const [dd, month_item, year_item] = item.completion_date.split("-")
    // Pie data
    if (Number(month_item) - 1 == date_month) {
      if (item.status == "em progresso") {
        progressOrder++
      }
      if (item.status == "concluido") {
        completeOrder++
      }
      if (item.status == "cancelado") {
        canceledOrder++
      }
    }
    // line data
    if (item.status == "concluido" && year_item === `${year}`) {
      line_array[Number(month_item) - 1] = line_array[Number(month_item)] + 1
    }
  })

  const line_data = {
    labels,
    datasets: [
      {
        label: `${year}`,
        data: line_array,
        borderColor: "#7963e1",
        backgroundColor: "#7963e1"
      }
    ]
  }
  const pie_data = {
    labels: ["Concluidas", "Em progresso", "Canceladas"],
    datasets: [
      {
        label: "Metricas de pedidos concluidos",
        data: [`${completeOrder}`, `${progressOrder}`, `${canceledOrder}`],
        backgroundColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <section className="chart-grid">
        <div className="chart-container">
          <div className="chart_wrp">
            <p>Metrica Anual:</p>
            <div className="chart_details">
              <Line className="chart" options={options} data={line_data} />
            </div>
          </div>
          <div className="chart_wrp">
            <p>Metricas do Mês: {month} </p>
            <div className="chart_details">
              <Pie className="chart" data={pie_data} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Charts

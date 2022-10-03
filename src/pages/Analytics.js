import React from 'react'
import MonthlyChart from '../components/MonthlyChart'
import DailyChart from '../components/DailyChart'

function Analytics() {
  return (
    <div className="analytics">
      <h3>Analytics</h3>
      <div className="graphs">
        <div className="monthly">
          <MonthlyChart/>
        </div>
        <div className="daily">
        <DailyChart/>
        </div>
      </div>
    </div>
  )
}

export default Analytics
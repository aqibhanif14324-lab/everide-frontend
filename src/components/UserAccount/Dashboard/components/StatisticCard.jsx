import '../styles/StatisticCard.css'

function StatisticCard({ title, value, unit, color }) {
  return (
    <div className="statistic-card">
     <div className="statistic-title">
        {title}
      </div>
      <div className={`statistic-value ${color}`}>
        {value}
      </div>
      
      <div className="statistic-unit">
        {unit}
      </div>
    </div>
  )
}

export default StatisticCard
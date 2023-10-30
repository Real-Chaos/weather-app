import format from "date-fns/format"

const daily = (data, unit) => {
  
  const forecast = document.querySelector('.forecast')
	forecast.innerHTML = ""
  data.forecast.forecastday.forEach(day => {
    let maxTemp = Math.round(unit === 'F'? day.day.maxtemp_f: day.day.maxtemp_c)
    let minTemp = Math.round(unit === 'F'? day.day.mintemp_f: day.day.mintemp_c)
    const forecastCard = `
    <div class="forecast-card">
			<p>${format(new Date(day.date), 'iiii')}</p>
			<div class="temperature">
				<h1>${maxTemp} °${unit}</h1>
				<h6>${minTemp} °${unit}</h6>
			</div>
      <img src="https:${day.day.condition.icon}" alt="" />
		</div>`
    forecast.innerHTML += forecastCard
  })
}

export default daily

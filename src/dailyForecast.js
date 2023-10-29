import format from "date-fns/format"

const daily = (data) => {
  const forecast = document.querySelector('.forecast')
	forecast.innerHTML = ""
  data.forecast.forecastday.forEach(day => {
    const forecastCard = `
    <div class="forecast-card">
			<p>${format(new Date(day.date), 'iiii')}</p>
			<div class="temperature">
				<h1>${Math.round(day.day.maxtemp_c)} °C</h1>
				<h6>${Math.round(day.day.mintemp_c)} °C</h6>
			</div>
      <img src="https:${day.day.condition.icon}" alt="" />
		</div>`
    forecast.innerHTML += forecastCard
  })
}

export default daily

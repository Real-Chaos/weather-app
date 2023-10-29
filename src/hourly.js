import format from 'date-fns/format'
const hourly = (data) => {
	const forecastCards = document.querySelectorAll('.hourly-forecast-cards')

	// let forecast = ''

	// console.log(data)
	// // ${format(new Date(hour.time), 'h a')}

	const createCard = (time, maxTemp, icon) => {
		const hourCard = `
    <div class="forecast-card">
      <p>${time}</p>
      <div class="temperature">
        <h1>${maxTemp} °C</h1>
      </div>
      <img src="https:${icon}" alt="" />
    </div>`

		return hourCard
	}

	console.log(data)
  forecastCards.forEach(card => card.innerHTML = "")

	data.forecast.forecastday[0].hour.forEach((hour, i) => {
		const time = format(new Date(hour.time), 'h a')
		const card = createCard(time, hour.temp_c, hour.condition.icon)
		if (i < 8) {
			// firstEight.innerHTML += card
      
			forecastCards[0].innerHTML += card
		} else if (i >= 8 && i < 16) {
      
			forecastCards[1].innerHTML += card
		} else if (i >= 16 && i <= 24) {
      
			forecastCards[2].innerHTML += card
		}
	})
}

export default hourly

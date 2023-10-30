import format from 'date-fns/format'
const hourly = (data, unit) => {
	const forecastCards = document.querySelectorAll('.hourly-forecast-cards')

	const createCard = (time, maxTemp, icon) => {
		const hourCard = `
    <div class="forecast-card">
      <p>${time}</p>
      <div class="temperature">
        <h1>${maxTemp} °${unit}</h1>
      </div>
      <img src="https:${icon}" alt="" />
    </div>`

		return hourCard
	}

	forecastCards.forEach((card) => (card.innerHTML = ''))


	const totalHours = []
	data.forecast.forecastday[0].hour.forEach((hour, i) => {
		const currentTime = Number(format(new Date(data.location.localtime), 'H'))

		if (i >= currentTime) totalHours.push(hour)
	})
	do {
		for (let i = 0; i < 24 - totalHours.length; i++) {
			totalHours.push(data.forecast.forecastday[1].hour[i])
		}
	} while (totalHours.length < 24)

	totalHours.forEach((hour, i) => {
		const time = format(new Date(hour.time), 'h a')
    const temp = Math.round(unit === "F" ? hour.temp_f: hour.temp_c)
		const card = createCard(time, temp, hour.condition.icon)
		if (i < 8) {
			forecastCards[0].innerHTML += card
		} else if (i >= 8 && i < 16) {
			forecastCards[1].innerHTML += card
		} else if (i >= 16 && i <= 24) {
			forecastCards[2].innerHTML += card
		}
	})


}

export default hourly

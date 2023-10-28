import format from 'date-fns/format'

const summary = (data) => {
	const condition = data.current.condition.text.toLowerCase()
	const icons = {
		sunny: 'fa-sun',
		cloudy: 'fa-cloud',
		partly: 'fa-cloud-sun',
		rainy: 'fa-cloud-rain',
    misty: 'fa-water'
	}

	let icon = document.createElement('i')
  icon.classList.add('icon')
  icon.classList.add('fa-solid')

	if (condition.includes('cloudy') || condition.includes('overcast'))icon.classList.add(icons.cloudy)
	else if (condition.includes('rain')) icon.classList.add(icons.rainy)
else if(condition.includes('sun') || condition.includes('clear')) icon.classList.add(icons.sunny)
else if(condition.includes('mist')) icon.classList.add(icons.misty)

	const date = format(new Date(), 'eeee, do MMM')

	const time = format(new Date(), 'h:m b')

	const currentCondition = document.querySelector('.current-condition')
	currentCondition.textContent = data.current.condition.text

	const location = document.querySelector('.location')

	location.textContent = data.location.name

	const dateEle = document.querySelector('.date')
	dateEle.textContent = date

	const timeEle = document.querySelector('.time')
	timeEle.textContent = time

	const currentTemp = document.querySelector('.temp-oversize')

	currentTemp.textContent = data.current.temp_c + ' °C'

	const specialIcon = document.querySelector('.summary-icon')
	specialIcon.textContent = ''
  specialIcon.appendChild(icon)

	const feelsLike = document.querySelector('.feels-like')
	feelsLike.textContent = data.current.feelslike_c + ' °C'

	const humidity = document.querySelector('.humidity-text')
	humidity.textContent = data.current.humidity + ' %'

	const rainChances = document.querySelector('.chances-of-rain')
	rainChances.textContent =
		data.forecast.forecastday[0].hour[0].chance_of_rain + ' %'

	const windSpeed = document.querySelector('.wind-speed')
	windSpeed.textContent = data.current.gust_mph + ' mph'

}

export default summary

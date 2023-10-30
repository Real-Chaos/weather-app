import daily from './dailyForecast'
import fetchData from './fetchData'
import hourly from './hourly'
import './styles.css'
import summary from './summary'
import navigation from './navigation'


const webpage = async () => {
	let data = await fetchData('london')
	const hourlyDiv = document.querySelector('.hourly-div')
	const dailyDiv = document.querySelector('.daily-div')
	const hourlyIndicators = document.querySelector('.hourly-indicators')

	let selected = 'daily'

	dailyDiv.addEventListener('click', () => {
		dailyDiv.classList.add('selected')
		hourlyDiv.classList.remove('selected')
		selected = 'daily'
		updateData(data)
	})

	hourlyDiv.addEventListener('click', () => {
		hourlyDiv.classList.add('selected')
		dailyDiv.classList.remove('selected')
		selected = 'hourly'
		updateData(data)
	})

	const updateData = (data) => {
		if (selected === 'hourly') {
			hourly(data)
			document.querySelector('.forecast').style.display = 'none'
			document.querySelector('.hourly-forecast').style.display = 'block'
			hourlyIndicators.style.display = 'flex'
		} else if (selected === 'daily') {
			daily(data)
			document.querySelector('.hourly-forecast').style.display = 'none'
			document.querySelector('.forecast').style.display = 'grid'
			hourlyIndicators.style.display = 'none'
		}
	}

	summary(data)

	updateData(data)

	const form = document.querySelector('form')
	form.addEventListener('submit', async (e) => {
		e.preventDefault()
		data = await fetchData(e.target.elements.location.value)
		summary(data)
		updateData(data)
		form.reset()
	})

	navigation()
}

webpage()

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
  const display = document.querySelector('.change-display')
  let chosenDisplay = 'C'

	let selected = 'daily'

	dailyDiv.addEventListener('click', () => {
		dailyDiv.classList.add('selected')
		hourlyDiv.classList.remove('selected')
		selected = 'daily'
		updateData(data, chosenDisplay)
	})

	hourlyDiv.addEventListener('click', () => {
		hourlyDiv.classList.add('selected')
		dailyDiv.classList.remove('selected')
		selected = 'hourly'
		updateData(data, chosenDisplay)
	})

	const updateData = (data, unit) => {
		if (selected === 'hourly') {
			hourly(data, unit)
			document.querySelector('.forecast').style.display = 'none'
			document.querySelector('.hourly-forecast').style.display = 'block'
			hourlyIndicators.style.display = 'flex'
		} else if (selected === 'daily') {
			daily(data, unit)
			document.querySelector('.hourly-forecast').style.display = 'none'
			document.querySelector('.forecast').style.display = 'grid'
			hourlyIndicators.style.display = 'none'
		}
	}

	summary(data, chosenDisplay)

	updateData(data, chosenDisplay)
  
	const form = document.querySelector('form')
	form.addEventListener('submit', async (e) => {
		e.preventDefault()
		data = await fetchData(e.target.elements.location.value)
		summary(data, chosenDisplay)
		updateData(data, chosenDisplay)
		form.reset()
	})

	navigation()

	
	display.addEventListener('click', () => {
		if (display.textContent === 'Display F') {
			display.textContent = 'Display C'
      chosenDisplay = 'F'
      summary(data, chosenDisplay)
      updateData(data, chosenDisplay)
		} else if (display.textContent === 'Display C') {
			display.textContent = 'Display F'
      chosenDisplay = 'C'
      summary(data, chosenDisplay)
      updateData(data, chosenDisplay)
		}
	})
}

webpage()

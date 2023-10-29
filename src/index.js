import daily from './dailyForecast'
import fetchData from './fetchData'
import hourly from './hourly'
import './styles.css'
import summary from './summary'

const webpage = async () => {
	const right = document.querySelector('.right-ind')
	const left = document.querySelector('.left-ind')
	const dots = document.querySelector('.dots')
	const dot = document.querySelectorAll('.dot')

	let current = 0

	const colorSelectedDot = (current) => {
		dot.forEach((d) => {
			d.style.background = 'transparent'
		})
		current.style.background = 'white'
	}

	colorSelectedDot(dots.children[current])

	right.addEventListener('click', () => {
		current < 2 ? (current += 1) : (current = 0)
		colorSelectedDot(dots.children[current])
		console.log(current)
    updateCards()
	})

	left.addEventListener('click', () => {
		current <= 0 ? (current = 2) : (current -= 1)
		colorSelectedDot(dots.children[current])
		console.log(current)
    updateCards()
	})

	const data = await fetchData('london')
	hourly(data, current)
	const hourCards = document.querySelectorAll('.hourly-forecast-cards')

	const updateCards = () => {
		hourCards.forEach((cards) => {
			if (Number(cards.getAttribute('data-index')) !== current) {
				cards.style.display = 'none'
			} else cards.style.display = 'grid'
		})
	}

	updateCards()
	// const data = await fetchData('london')
	// summary(data)
	// // daily(data)
	// hourly(data)

	// const form = document.querySelector('form')
	// form.addEventListener('submit', async (e) => {
	// 	e.preventDefault()
	// 	const data = await fetchData(e.target.elements.location.value)
	// 	summary(data)
	// 	daily(data)
	// 	hourly(data)
	// 	form.reset()
	// })
}

webpage()

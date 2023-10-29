import daily from './dailyForecast'
import fetchData from './fetchData'
import hourly from './hourly'
import './styles.css'
import summary from './summary'

const webpage = async () => {
  let data = await fetchData('london')
	const right = document.querySelector('.right-ind')
	const left = document.querySelector('.left-ind')
	const dots = document.querySelector('.dots')
	const dot = document.querySelectorAll('.dot')
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

  const updateData = (data) => {
    if(selected === 'hourly') {
      console.log(data)
      hourly(data)
      document.querySelector('.forecast').style.display = 'none'
      document.querySelector('.hourly-forecast').style.display = 'block'
      hourlyIndicators.style.display = 'flex'
    }
    else if(selected === 'daily') {
      daily(data)
      document.querySelector('.hourly-forecast').style.display = 'none'
      document.querySelector('.forecast').style.display = 'grid'
      hourlyIndicators.style.display = 'none'
    }
  }
	
  summary(data)
	
	const hourCards = document.querySelectorAll('.hourly-forecast-cards')

	const updateCards = () => {
		hourCards.forEach((cards) => {
			if (Number(cards.getAttribute('data-index')) !== current) {
				cards.style.display = 'none'
			} else cards.style.display = 'grid'
		})
	}

	updateCards()
  updateData(data)
	// const data = await fetchData('london')
	// summary(data)
	// // daily(data)
	// hourly(data)

	const form = document.querySelector('form')
	form.addEventListener('submit', async (e) => {
		e.preventDefault()
		data = await fetchData(e.target.elements.location.value)
		summary(data)
		updateData(data)
		form.reset()
	})
}

webpage()

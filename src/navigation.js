const navigation = () => {
	const right = document.querySelector('.right-ind')
	const left = document.querySelector('.left-ind')
	const dots = document.querySelector('.dots')
	const dot = document.querySelectorAll('.dot')
	const hourCards = document.querySelectorAll('.hourly-forecast-cards')

	let current = 0

	const updateCards = () => {
		hourCards.forEach((cards) => {
			if (Number(cards.getAttribute('data-index')) !== current) {
				cards.style.display = 'none'
			} else cards.style.display = 'grid'
		})
	}

	updateCards()

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
}



export default navigation
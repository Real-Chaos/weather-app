import fetchData from './fetchData'
import './styles.css'
import summary from './summary'

const webpage = async () => {
	const data = await fetchData('london')
	summary(data)

  const form = document.querySelector('form')
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = await fetchData(e.target.elements.location.value)
    summary(data)
    form.reset()
  })
}

webpage()

import fetchData from './fetchData'
import './styles.css'

const webpage = async () => {
	const data = await fetchData('london')
	console.log(data)
}

webpage()

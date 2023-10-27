const fetchData = async (location) => {
	const response = await fetch(
		`http://api.weatherapi.com/v1/forecast.json?key=dcfd04dac9aa44228fb12518232710&q=${location}&days=7&aqi=no&alerts=no`,
		{ mode: 'cors' },
	)
	const data = await response.json()
	return data.forecast.forecastday
}

export default fetchData

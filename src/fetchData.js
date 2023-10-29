const fetchData = async (location) => {
	try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=dcfd04dac9aa44228fb12518232710&q=${location}&days=7&aqi=no&alerts=no`,
      { mode: 'cors' },
    )

    if(response.status === 400) throw ('New Exception')
    const data = await response.json()
    return data
  } catch(err) {
    console.log('DID NOT WORK BOOHOOO')
  }
}

export default fetchData

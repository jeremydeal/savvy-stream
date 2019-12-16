import fetch from 'node-fetch'

const key = '8705b7f75127cc7460702dfc25631188'
// see: https://openweathermap.org/current
// API username: jdeal
const getUrl = (resource: string, queryParams: string) => `https://api.openweathermap.org/data/2.5/${resource}/${queryParams}&APPID=${key}`

export const getForecast = async () => {
    const url = getUrl("weather", "q=Bountiful,UT")

    return fetch(url)
        .then(res => res.json())
        .then(
            (data: any) => {
                console.log(data);

                return data;
            }
        )
        .catch(ex => console.log(ex))
}


  // "weather": [
  //   {
  //     "id": 800,
  //     "main": "Clear",
  //     "description": "clear sky",
  //     "icon": "01n"
  //   }
  // ],
  // "base": "stations",
  // "main": {
  //   "temp": 289.92,
  //   "pressure": 1009,
  //   "humidity": 92,
  //   "temp_min": 288.71,
  //   "temp_max": 290.93
  // },
  // "wind": {
  //   "speed": 0.47,
  //   "deg": 107.538
  // },
  // "clouds": {
  //   "all": 2
  // },
  // "dt": 1560350192,
  // "sys": {
  //   "type": 3,
  //   "id": 2019346,
  //   "message": 0.0065,
  //   "country": "JP",
  //   "sunrise": 1560281377,
  //   "sunset": 1560333478
  // },
  // "timezone": 32400,
  // "id": 1851632,
  // "name": "Shuzenji",
  // "cod": 2

import fetch from 'node-fetch'

const key = "F4F31AC2-102C-48C7-B777-CEB8CA208E83"
// see: https://docs.airnowapi.org/ForecastsByZip/query
// API username: jeremy.n.deal
const getUrl = (zip: string, date: string) => 
    `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&date=${date}&distance=25&API_KEY=${key}`

export const getAirQuality = async (zip: string, date: Date) => {
    const url = getUrl(zip, formatDate(date))

    return fetch(url)
        .then(res => res.json())
        .then(
            (data: any) => {
                // console.log(data);
                const candidatesForToday = data.filter((x: any) => formatDate(new Date(x.DateForecast)) === formatDate(new Date(Date.now())));
                if (candidatesForToday.length === 0) {
                    console.log("ERROR")
                    return
                }

                const today = candidatesForToday[0];
                if (!today) return null;
                return {
                    location: `${today.ReportingArea}, ${today.StateCode}`,
                    quality: today.Category.Name
                };
            }
        )
        .catch(ex => console.log(ex))
}

function formatDate(d: Date) {
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}


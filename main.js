async function weatherCph() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,rain_sum,sunshine_duration,sunrise,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&hourly=temperature_2m";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`response statuses: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        const dates = data.daily.time
        const temperature = data.daily.temperature_2m_max
        const weathercode = data.daily.weather_code
        const rain = data.daily.rain_sum;
        const sunrise = data.daily.sunrise;

        const container = document.querySelector("#weather_container");
        const template = document.querySelector("#weather_card");

        for (let i = 0; i < dates.length; i++) {
            const card = template.content.cloneNode(true);

            card.querySelector(".date").textContent = `Dato ${dates[i]}`
            card.querySelector(".temperature").textContent = `Maks temp: ${temperature[i]} °C`
            card.querySelector(".weathercode").textContent = `Weather code: ${weathercode[i]}`
            card.querySelector(".rain").textContent = `Regn: ${rain[i]} mm`
            card.querySelector(".sunrise").textContent = `Sunrise ${sunrise[i]}`

            container.appendChild(card)
        }

    } catch (error) {
        console.error(error.message)
    }
    
}

//Næste opgave:
// Tilføj mulighed for at søge efter en by og vis vejret for byen
// searchparams?
// brug Nominatim API til at konvertere bynavne til kordinater

weatherCph()

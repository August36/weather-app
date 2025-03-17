async function weatherCph() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=55.6761&longitude=12.5683&current_weather=true";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`response statuses: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);

    } catch {
        console.error(error.message)
    }
    
}

weatherCph()
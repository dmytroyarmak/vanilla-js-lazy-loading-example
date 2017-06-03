import { getWeather } from './weather-service';

export function renderWeatherPopup(container, city) {
    getWeather(city).then((weatherData) => {
        const popup = document.createElement('div');
        popup.innerHTML = `
            <h1>Weather in ${city}</h1>
            <dl>
                <dt>Temperature</dt>
                <dd>${weatherData.main.temp}C</dd>

                <dt>Wind speed</dt>
                <dd>${weatherData.wind.speed} km/h</dd>

                <dt>Humidity</dt>
                <dd>${weatherData.main.humidity}%</dd>

                <dt>Description</dt>
                <dd>${weatherData.weather.map(w => w.main)}</dd>
            </dl>
            <button type="button" ref-close-btn>Close</button>
        `;

        popup
            .querySelector('[ref-close-btn]')
            .addEventListener('click', () => {
                container.removeChild(popup);
            });

        container.appendChild(popup);
    });
}

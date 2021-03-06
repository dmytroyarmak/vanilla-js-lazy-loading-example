import * as moment from 'moment';
import { getWeather } from './weather-service';

export function renderWeatherPopup(container, city) {
    getWeather(city).then((weatherData) => {
        const weatherPopup = document.createElement('div');
        weatherPopup.innerHTML = `
            <h1>Weather in ${city}</h1>
            <h2>${moment().format('LLLL')}</h2>
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

        weatherPopup
            .querySelector('[ref-close-btn]')
            .addEventListener('click', () => {
                container.removeChild(weatherPopup);
            });

        container.appendChild(weatherPopup);
    });
}

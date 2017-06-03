import { renderWeatherPopup } from './weather-popup';

export function renderWeatherButton (container, city) {
    container.innerHTML = `
        <button class="wz-button">Show weather in ${city}!</button>
    `;

    container
        .querySelector('button')
        .addEventListener('click', () => {
            renderWeatherPopup(container, city);
        });
}

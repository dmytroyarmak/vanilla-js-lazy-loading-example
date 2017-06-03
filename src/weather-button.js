export function renderWeatherButton (container, city) {
    const weatherButton = document.createElement('div');
    weatherButton.innerHTML = `
        <button class="wz-button" ref-show-weather-btn>
            Show weather in ${city}!
        </button>
    `;

    weatherButton
        .querySelector('[ref-show-weather-btn]')
        .addEventListener('click', () => {
            import('./weather-popup').then(({renderWeatherPopup}) => {
                renderWeatherPopup(container, city);
            });
        });

    container.appendChild(weatherButton);
}

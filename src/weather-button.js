
export function renderWeatherButton (container, city) {
    container.innerHTML = `
        <button class="wz-button" ref-show-weather-btn>
            Show weather in ${city}!
        </button>
    `;

    container
        .querySelector('[ref-show-weather-btn]')
        .addEventListener('click', () => {
            import('./weather-popup').then(({renderWeatherPopup}) => {
                renderWeatherPopup(container, city);
            });
        });
}

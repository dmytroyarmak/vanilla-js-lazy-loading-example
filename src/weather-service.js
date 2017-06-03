const API_KEY = '66f378bb0bd7850b016ae49fb2acd5a9';

export function getWeather(city) {
    let params = new URLSearchParams();
    params.set('units', 'metric');
    params.set('appid', API_KEY);
    params.set('q', city);

    let apiUrl = new URL('http://api.openweathermap.org/data/2.5/weather');
    apiUrl.search = params;

    return window
        .fetch(apiUrl)
        .then((response) => {
            return response.json();
        });
}

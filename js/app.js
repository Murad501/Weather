
document.getElementById('search-btn').addEventListener('click', function(){
    const searchValue = document.getElementById('search-input').value;
    loadWeather(searchValue);
})

const api_key = 'b50d44658af4c1bcb131cc0f092ca458';

const loadWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    const data = await response.json()
    displayValue(data)
}

const displayValue = (data) => {
    if(data.name === undefined){
        alert('Please type a valid city name');
        return;
    }
    document.getElementById('city').innerText = data.name;
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('weather').innerText = data.weather[0].main

}

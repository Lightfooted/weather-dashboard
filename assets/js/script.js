const api = {
    key: '12b15af04b190776a75f0b8edb5f30b8',
    site: 'https://api.openweathermap.org/data/2.5/weather?',
  };
  
  const Input = document.getElementById('input');
  
  Input.addEventListener('keypress', (event) => {
    if (event) {
      getWeather(Input.value);
  
      document.querySelector('.weather-show').style.display = 'block';
    }
  });
  
  function getWeather(city) {
    fetch(`${api.site}q=${city}&appid=${api.key}&units=metric`)
      .then((data) => {
        return data.json();
      })
      .then(showWeather);
  }

  function showWeather(data) {

    let city = document.getElementById('city');
    city.innerHTML = `${data.name}, ${data.sys.country}`;
  }
class UI {
   constructor() {
      this.location = document.querySelector('#w-location');
      this.desc = document.querySelector('#w-desc');
      this.string = document.querySelector('#w-string');
      this.icon = document.querySelector('#w-icon');
      this.humidity = document.querySelector('#w-humidity');
      this.feelsLike = document.querySelector('#w-feels-like');
      this.pressure = document.querySelector('#w-pressure');
      this.wind = document.querySelector('#w-wind');
   }

   paint(weather) {
      console.log(weather.main.feels_like);
      this.location.textContent = `${weather.name}, ${weather.sys.country}`;
      this.desc.textContent = weather.weather[0].description;
      this.string.textContent = weather.main.temp;
      this.icon.setAttribute('src', weather.weather[0].icon);
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
      this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
      this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
      this.wind.textContent = `Wind: ${weather.wind.speed}`;
   }
}

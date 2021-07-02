class Weather {
   constructor(city) {
      this.apiKey = 'b2448927f000760c0e17e90310c9b95c';
      this.city = city;
   }

   // Fetch weather from API
   async getWeather() {
      const response = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
      );
      const responseData = await response.json();
      return responseData;
   }

   // Change weather location
   changeLocation(city) {
      this.city = city;
   }
}

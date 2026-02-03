b = document.getElementById("button").addEventListener("click", () => {
  let inputField = document.getElementById("check");
  let location = inputField.value.trim();

  //calling the API
  console.log("Fetching weather data for location:", location);
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=d487a3ae4fd442fba2742817262301&q=${location}`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Weather data received:", data);
      // Update the UI with the received weather data
      document.querySelector(".temperature").textContent =
        `${data.current.temp_c} °C`;
      document.querySelector(".labelloc").textContent = data.location.name;
      document.querySelector(".time").textContent =
        data.location.localtime.split(" ")[1]; //Extracting time from localtime
      document.querySelector(".day").textContent = new Date(
        data.location.localtime
      ).toLocaleDateString("en-US", { weekday: "long" });
      document.querySelector(".weather-icon").src = data.current.condition.icon;
      document.querySelector(".date").textContent =
        data.location.localtime.split(" ")[0]; //Extracting date from localtime
      document.querySelector(".condition").textContent = data.current.condition.text;
    })
      
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert(
        `Error fetching weather data with error code ${error.status}. Please try again.`,
      );
    });

  inputField.value = "";
});


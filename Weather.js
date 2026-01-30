b=document.getElementById("button").addEventListener("click", ()=>{
    let inputField=document.getElementById("check")
    let location= inputField.value.trim();

    //calling the API
    console.log("Fetching weather data for location:", location);
    fetch(`https://api.weatherapi.com/v1/current.json?key=d487a3ae4fd442fba2742817262301&q=${location}`)
      .then(response => response.json())
      .then(data => {
        console.log("Weather data received:", data);
        // Update the UI with the received weather data
        document.querySelector(".temperature").innerText = `${data.current.temp_c} °C`;
        document.querySelector(".labelloc").innerText = data.location.name;
        document.querySelector(".time").innerText = data.location.localtime.split(" ")[1];
        document.querySelector(".day").innerText = new Date(data.location.localtime).toLocaleDateString('en-US', { weekday: 'long' });
        document.querySelector(".date").innerText = data.location.localtime.split(" ")[0];
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });

      inputField.value="";
});


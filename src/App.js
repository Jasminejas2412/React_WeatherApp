import axios from "axios"
import { useState } from "react"


function App() {
    const [deg,setdeg]=useState("238")
    const [city,setcity]=useState("France")
    const [desc,setdate]=useState("Raining")
    const[enteredvalue,setenteredvalue]=useState("")


    function handleinput(event){
        setenteredvalue(event.target.value);

    }
    function getdata(){
        var weather= axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=fe20aadde644c784306ae7dbb0bce52e`)
        weather.then(function(dalta){
            console.log(dalta.data);
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdate(dalta.data.weather[0].main)
        })
    }
  return (
      <div className="flex flex-row justify-center h-[100vh] items-center" >

          <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-2 rounded-md shadow">
              <h2 className="font-medium">Hey! ⛅</h2>
              <p className="text-xs">Do you want to know the weather Report :)</p>
              <input type="text"onChange={handleinput} className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?" />

              <br/>

              <button className="bg-black text-white rounded-lg p-1 text-xs mt-2" onClick={getdata}>Get Report ⚡</button>

              <p className="text-xs mt-2">Degree: {deg} | City: {city} | Weather:{desc}</p>
          </div>

      </div>)
}

export default App
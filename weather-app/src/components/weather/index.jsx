import { useEffect, useState } from "react"
import Search from "../search"

export default function Weather() {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState(null)

  async function fetchWeatherData(param) {
   
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f40bdcf1ce5954ad1799a1a1ec04c46b`
      )


      const data = await response.json()

      console.log(data)
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  async function handleSearch() {
    fetchWeatherData(search)
  }


 
  return (
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
     
  )
}

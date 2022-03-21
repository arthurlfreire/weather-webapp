import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext({})

export default function GlobalContextProvider({children}){

    const [city, setCity] = useState("")
    const [temperature, setTemperature] = useState(0)
    const [weather, setWeather] = useState("")
    const [humidity, setHumidity] = useState(0)

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(async(position)=>{
    
          const { latitude, longitude } = position.coords
          
          try{
    
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
            const data = await response.json(response)

            setCity(data.name)
            setTemperature(data.main.temp - 273)
            setWeather(data.weather[0].main)
            setHumidity(data.main.humidity)

          }catch(err){
            console.error(err)
          }    
        })
    
      }, [])

    return(
        <GlobalContext.Provider value={{
            city,
            temperature,
            weather,
            humidity,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
import React from 'react'
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind,
  Thermometer,
  Droplets,
  Eye
} from 'lucide-react'

interface WeatherData {
  location: string
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy'
  humidity: number
  windSpeed: number
  visibility: number
}

const mockWeatherData: WeatherData = {
  location: 'São Paulo, SP',
  temperature: 24,
  condition: 'sunny',
  humidity: 65,
  windSpeed: 12,
  visibility: 10
}

const getWeatherIcon = (condition: WeatherData['condition']) => {
  switch (condition) {
    case 'sunny':
      return <Sun className="h-8 w-8 text-yellow-500" />
    case 'cloudy':
      return <Cloud className="h-8 w-8 text-gray-500" />
    case 'rainy':
      return <CloudRain className="h-8 w-8 text-blue-500" />
    default:
      return <Sun className="h-8 w-8 text-yellow-500" />
  }
}

const getConditionText = (condition: WeatherData['condition']) => {
  switch (condition) {
    case 'sunny':
      return 'Ensolarado'
    case 'cloudy':
      return 'Nublado'
    case 'rainy':
      return 'Chuvoso'
    default:
      return 'Ensolarado'
  }
}

export function WeatherWidget() {
  const weather = mockWeatherData

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Clima</h3>
            <p className="text-sm text-muted-foreground">{weather.location}</p>
          </div>
          {getWeatherIcon(weather.condition)}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Temperatura</span>
            </div>
            <span className="text-2xl font-bold">{weather.temperature}°C</span>
          </div>

          <div className="text-center py-2">
            <p className="text-lg font-medium">{getConditionText(weather.condition)}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Droplets className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground">Umidade</p>
              <p className="text-sm font-medium">{weather.humidity}%</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Wind className="h-4 w-4 text-gray-500" />
              </div>
              <p className="text-xs text-muted-foreground">Vento</p>
              <p className="text-sm font-medium">{weather.windSpeed} km/h</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Eye className="h-4 w-4 text-purple-500" />
              </div>
              <p className="text-xs text-muted-foreground">Visibilidade</p>
              <p className="text-sm font-medium">{weather.visibility} km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

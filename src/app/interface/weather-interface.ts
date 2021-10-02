export interface WeatherInterface {

    coord: {
        lon: number,
        lat: number
    },
    current: WeatherData
    daily: WeatherData[]
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export interface WeatherData {

    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    pressure: number
    sunrise: number
    sunset: number
    temp: any
    uvi: number
    visibility: number,
    weather: Weather,
    wind_deg: number,
    wind_speed: number,
    wind_gust: number

}

export interface Weather {
    description: string
    icon: string
    id: number
    main: string
}


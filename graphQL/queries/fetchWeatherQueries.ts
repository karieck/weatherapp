import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query myQuery(
    $current: String = "is_day,relativehumidity_2m,temperature_2m,weathercode,windspeed_10m,winddirection_10m"
    $daily: String = "apparent_temperature_max,apparent_temperature_min,sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,uv_index_max,weathercode"
    $hourly: String = "apparent_temperature,precipitation,precipitation_probability,rain,relativehumidity_2m,showers,snow_depth,snowfall,temperature_2m,uv_index,uv_index_clear_sky,windgusts_10m"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current: $current
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current {
        interval
        is_day
        relativehumidity_2m
        temperature_2m
        time
        weathercode
        windspeed_10m
        winddirection_10m
      }
      current_units {
        interval
        is_day
        relativehumidity_2m
        temperature_2m
        time
        weathercode
        windspeed_10m
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      elevation
      generationtime_ms
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;

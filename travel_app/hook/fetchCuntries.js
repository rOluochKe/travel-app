import { useState, useEffect } from 'react'
import axios from 'axios'

const fetchCountries = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchDate = async () => {
    setIsLoading(true)

    try {
      const response = await axios.get('')
      setCountries(response.data.countries)
      setIsLoading(false)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDate()
  },[])

  const refetch = () => {
    setIsLoading(true)
    fetchDate()
  }

  return { countries, isLoading, error, refetch }
}

export default fetchCountries

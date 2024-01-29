import { LocationType } from "../types/location";

export const fetchLocationSuggestions = async (location: string): Promise<LocationType[]> => {
    try {
      if (location.length > 2) {
        const API_KEY = 'ADD_YOUR_API_KEY';
        const endpoint = `https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${location}&limit=6&dedupe=1`;
        const response = await fetch(endpoint);
        const data: LocationType[] = await response.json();
        return data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching location suggestions: ', error);
      return [];
    }
  };
  
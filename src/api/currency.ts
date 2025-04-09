const API_KEY = 'R8dyh8rqfwldpQlYOo0dZ7MxhCMGwkyh9VNHBs9VoDMCiBc86EgX4haKHTai64sB';
const BASE_URL = 'https://api.unirateapi.com/api';

export async function fetchExchangeRates(baseCurrency: string = 'USD') {
  try {
    const response = await fetch(
      `${BASE_URL}/rates?api_key=${API_KEY}&from=${baseCurrency}`
    );
    if (!response.ok) throw new Error('Failed to fetch rates');
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error('Error fetching rates:', error);
    throw error;
  }
}

export async function convertCurrency(from: string, to: string, amount: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/convert?api_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`
    );
    if (!response.ok) throw new Error('Failed to convert currency');
    return await response.json();
  } catch (error) {
    console.error('Error converting currency:', error);
    throw error;
  }
}
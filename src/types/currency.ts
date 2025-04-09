export interface CurrencyRate {
  from: string;
  to: string;
  rate: number;
}

export interface ConversionResult {
  from: string;
  to: string;
  amount: number;
  result: number;
}
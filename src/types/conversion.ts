export function KgToPound(weight: number): number {
    return +(weight * 2.20462).toFixed(2);
  }
  
  export function PoundToKg(weight: number): number {
    return +(weight * 0.453592).toFixed(2);
  }
  
  export function FootToInch(length: number): number {
    return +(length * 12).toFixed(2);
  }
  
  export function InchToFoot(length: number): number {
    const factor = 1 / 12;
    return +(length * factor).toFixed(2);
  }
  
  export function CelsiusToFahrenheit(temperature: number): number {
    return +((temperature * 9) / 5 + 32).toFixed(2);
  }
  
  export function FahrenheitToCelsius(temperature: number): number {
    return +(((temperature - 32) * 5) / 9).toFixed(2);
  }
  
  export function MinutesToSeconds(minutes: number): number {
    return +(minutes * 60).toFixed(2);
  }
  
  export function SecondsToMinutes(seconds: number): number {
    return +(seconds / 60).toFixed(2);
  }
  
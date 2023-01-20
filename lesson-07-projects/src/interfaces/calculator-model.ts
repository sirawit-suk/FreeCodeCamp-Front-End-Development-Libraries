export interface CalculatorDisplay {
  history: string;
  result: string;
}

export interface CalculatorKey {
  id: string;
  value: string;
  className: string;
  order: number;
}

export interface CalculatorKeys {
  [key: string]: CalculatorKey;
}

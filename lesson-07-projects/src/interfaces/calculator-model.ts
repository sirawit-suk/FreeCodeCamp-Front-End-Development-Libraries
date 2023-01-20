export interface CalculatorDisplay {
  history: string;
  result: string;
  // TODO : value ?
}

export interface CalculatorKey {
  id: string;
  value: string | number;
  className: string;
  order: number;
}

export interface CalculatorKeys {
  [key: string]: CalculatorKey;
}

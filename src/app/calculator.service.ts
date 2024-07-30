import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  add(a: number, b: number): number {
    this.log("add");
    return a+b;
  }
  subtract(a: number, b: number): number {
    this.log("subtract");
    return a-b;
  }

  multiply(a: number, b: number): number {
    this.log("multiply");
    return a*b;
  }
  divide(a: number, b: number): number {
    this.log("divide");
    if(b === 0){
      throw new Error("It's not possible to divide by zero")
    }else{
      return a/b;
    }
  }

  log(method:string) {
    console.log(`A ${method} method was called`);
  }

}

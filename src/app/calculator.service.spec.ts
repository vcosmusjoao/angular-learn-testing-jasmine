import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('Should Multiply Two Numbers', () => {
    const result = service.multiply(3,5);
    expect(result).toBe(15);
  });

  it('Should Add Two Numbers', () => {
    const result = service.add(3,5);
    expect(result).toBe(8);
  });

  it('Should subtract Two Numbers', () => {
    const result = service.subtract(3,5);
    expect(result).toBe(-2);
  });

  it('Should divide Two Numbers', () => {
    const result = service.divide(10,5);
    expect(result).toBe(2);
  });

  it('Should throw an error if divide Numbers by zero', () => {
    expect(() => service.divide(10,0)).toThrowError("It's not possible to divide by zero");
  });

  it('Should call method log when sum', () => {
    spyOn(service, 'log');
    service.add(2,3);
    expect(service.log).toHaveBeenCalledWith('add');
  });

  it('Should call method log when subtract', () => {
    spyOn(service, 'log');
    service.subtract(2,3);
    expect(service.log).toHaveBeenCalledWith('subtract');
  });

  it('Should call method log when subtract', () => {
    spyOn(service, 'log');
    service.divide(4,2);
    expect(service.log).toHaveBeenCalledWith('divide');
  });

  it('Should call method log when multiply', () => {
    spyOn(service, 'log');
    service.multiply(4,2);
    expect(service.log).toHaveBeenCalledWith('multiply');
  });
});
//run npm install to install dependencies before running npm test to use this file

import devtestproject from './devtestproject.js'
//package.json adds babel to be able to import es6 files
//the alert function call will give an error since jest does not implement it

test('divide two whole numbers', () => {
    expect(devtestproject.dividenumbers(5,2)).toEqual(2.5);
})

test('divide two decimals', () => {
    expect(devtestproject.dividenumbers(10.5,5.25)).toEqual(2);
})

test('divide one decimal as divisor', () => {
    expect(devtestproject.dividenumbers(10,2.5)).toBe(4);
})

test('divide one decimal as dividend', () => {
    expect(devtestproject.dividenumbers(12.5,5)).toBe(2.5);
})

test('divide bigger divisor', () => {
    expect(devtestproject.dividenumbers(2,4)).toBe(0.5);
})

test('dividend is 0', () => {
    expect(devtestproject.dividenumbers(0,3)).toBe(0);
})

test('num1 is empty', () => {
    expect(devtestproject.validateinput("",4)).toEqual(false);
})

test('num2 is empty', () => {
    expect(devtestproject.validateinput(4,"")).toEqual(false);
})


test('num1 has letter', () => {
    expect(devtestproject.validateinput("sdjlfsdf",4)).toEqual(false);
})

test('num2 has letters', () => {
    expect(devtestproject.validateinput(4,"sdjlfsdf")).toEqual(false);
})

test('divide by zero', () => {
    expect(devtestproject.validateinput(4,0)).toEqual(false);
})

test('valid input', () => {
    expect(devtestproject.validateinput(4,2)).toEqual(true);
})


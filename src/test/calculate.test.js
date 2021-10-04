import calculate from '../logic/calculate';

test('gets the number from the pressed button', () => {
  const obj = {total: null, next:null, operation:null};
  expect(calculate(obj, '3')).toEqual({total: null, next:'3'});
});

test('gets the symbols from the buttons', () => {
  const obj = {total: 4, next:null, operation:null};
  expect(calculate(obj, '+')).toEqual({total: 4, next:null, operation:'+'});
});

test('sums', () => {
  let obj = {total: 4, next:null, operation:null};
  obj = calculate(obj, '+');
  obj = calculate(obj, '5');
  expect(calculate(obj, '=')).toEqual({total: '9', next:null, operation:null});
});

test('substract', () => {
  let obj = {total: 5, next:null, operation:null};
  obj = calculate(obj, '-');
  obj = calculate(obj, '1');
  expect(calculate(obj, '=')).toEqual({total: '4', next:null, operation:null});
});

test('multiply', () => {
  let obj = {total: 5, next:null, operation:null};
  obj = calculate(obj, 'x');
  obj = calculate(obj, '5');
  expect(calculate(obj, '=')).toEqual({total: '25', next:null, operation:null});
});

test('divide', () => {
  let obj = {total: 100, next:null, operation:null};
  obj = calculate(obj, '÷');
  obj = calculate(obj, '10');
  expect(calculate(obj, '=')).toEqual({total: '10', next:null, operation:null});
});

test('clear screen', () => {
  let obj = {total: 100, next:null, operation:null};
  obj = calculate(obj, '÷');
  obj = calculate(obj, '10');
  expect(calculate(obj, 'AC')).toEqual({total: 0, next:null, operation:null});
});
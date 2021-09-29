import React, { useState } from 'react';
import CalcButton, { CalcDisplay } from '../components/Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObject, setDisplay] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateCalc = (value) => {
    setDisplay(calculate(calcObject, value));
  };

  const displayText = (calcValues) => {
    const { total, next, operation } = calcValues;
    let ans = '0';
    if (operation && !next) {
      ans = operation;
    }
    if (total && !next) {
      ans = total;
    }
    if (next) {
      ans = next;
    }
    return ans;
  };

  return (
    <div className="container shadow d-flex bg-dark px-5 py-3 my-2 rounded justify-content-between">
      <h1 style={{ color: '#ffffff' }}>Lets do some math!</h1>
      <div className="Calculator row p-0 shadow fs-2 rounded-3">
        <CalcDisplay
          result={displayText(calcObject)}
        />
        <CalcButton text="AC" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="+/-" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="%" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="÷" Bclass="false" cFunction={updateCalc} />
        <CalcButton text="9" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="8" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="9" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="x" Bclass="false" cFunction={updateCalc} />
        <CalcButton text="4" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="5" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="6" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="-" Bclass="false" cFunction={updateCalc} />
        <CalcButton text="1" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="2" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="3" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="+" Bclass="false" cFunction={updateCalc} />
        <CalcButton text="0" Bclass="true" cFunction={updateCalc} />
        <CalcButton text="." Bclass="true" cFunction={updateCalc} />
        <CalcButton text="=" Bclass="false" cFunction={updateCalc} />
      </div>
    </div>
  );
};

export default Calculator;

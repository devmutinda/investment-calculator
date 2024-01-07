import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Results from './components/Results';

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investValues, setInvestValues] = useState({ ...INITIAL_VALUES });

  const inputIsValid = investValues.duration >= 1;

  const saveValue = (label, value) => {
    setInvestValues((prev) => {
      const newValues = {
        ...prev,
        [label]: +value,
      };
      return newValues;
    });
  };

  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <div className="input-group">
            <Input
              onChange={saveValue}
              tag="initialInvestment"
              values={investValues}
            >
              Initial investment
            </Input>
            <Input
              onChange={saveValue}
              tag="annualInvestment"
              values={investValues}
            >
              Annual investment
            </Input>
            <Input
              onChange={saveValue}
              tag="expectedReturn"
              values={investValues}
            >
              Expected Return
            </Input>
            <Input onChange={saveValue} tag="duration" values={investValues}>
              Duration
            </Input>
          </div>
        </section>
        {inputIsValid && <Results values={investValues} />}
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero.</p>
        )}
      </main>
    </>
  );
}

export default App;

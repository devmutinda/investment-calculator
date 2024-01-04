import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import Results from "./components/Results";

const INITIAL_VALUES = {
  "initialInvestment":"",
  "annualInvestment":"",
  "expectedReturn":"",
  "duration":"",
}


function App() {
  const [investValues, setInvestValues] = useState({...INITIAL_VALUES});

  const saveValues = (label, value) => {
    setInvestValues((prev) => {
      const newValues = {
        ...prev,
        [label]: parseFloat(value),
      }
      return newValues;
    })
  }

  return (
    <>
      <Header />
      <main>
        <section  className="input-group">
          <div id="user-input">
            <Input calcInvestment={saveValues} tag="initialInvestment">Initial investment</Input>
            <Input calcInvestment={saveValues} tag="annualInvestment">Annual investment</Input>
            <Input calcInvestment={saveValues} tag="expectedReturn">Expected Return</Input>
            <Input calcInvestment={saveValues} tag="duration">Duration</Input>
          </div>
        </section>
        <Results values={investValues} />
      </main>
    </>
  )
}

export default App

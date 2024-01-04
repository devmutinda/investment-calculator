import { calculateInvestmentResults, formatter } from "../util/investment";

const calculateInvestment = (investValues) => {
    const isEmpty = Object.values(investValues).some((val) => !val);
  
    if (!isEmpty) {
      // Calculate investment
      const results = calculateInvestmentResults({...investValues})
      return results;
    }
    return [];
  }
export default function Results({values}) {
    const results = calculateInvestment(values);
    let totalInterest = 0;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => {
                    totalInterest = totalInterest + result.interest;
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(result.valueEndOfYear - totalInterest)}</td>
                        </tr>
                    );
                    })}
            </tbody>
        </table>
    );
}
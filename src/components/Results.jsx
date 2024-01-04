import { calculateInvestmentResults, formatter } from "../util/investment";

// const calculateInvestment = (investValues) => {
//     const isEmpty = Object.values(investValues).some((val) => !val);
  
//     if (!isEmpty) {
//       // Calculate investment
//       const results = calculateInvestmentResults(investValues)
//       return results;
//     }
//     return [];
//   }
export default function Results({values}) {
    const results = calculateInvestmentResults(values);
    let totalInterest = 0;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => {
                    const { year, valueEndOfYear, interest } = result;
                    totalInterest = totalInterest + result.interest;
                    return (
                        <tr key={year}>
                            <td>{year}</td>
                            <td>{formatter.format(valueEndOfYear)}</td>
                            <td>{formatter.format(interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
                        </tr>
                    );
                    })}
            </tbody>
        </table>
    );
}
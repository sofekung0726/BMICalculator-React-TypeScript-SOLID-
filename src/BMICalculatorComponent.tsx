import { useState } from "react";
import BMICalculator from "./BMICalculator";
import BMIInterpretation from "./BMIInterpretation";

function BMICalculatorComponent() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBMI] = useState<string>("");
  const [interpretation, setInterpretation] = useState<string>("");

  const handleCalculate = () => {
      const calculator = new BMICalculator();
      const interpretationCalculator = new BMIInterpretation();

      const bmiValue: number = calculator.calculateBMI(
        parseFloat(weight),
        parseFloat(height)
      );

      const interpretationValue: string = interpretationCalculator.interpretBMI(
        bmiValue
      );

      if (typeof bmiValue === "number") {
        setBMI(bmiValue.toFixed(2));
        setInterpretation(interpretationValue);
      } else {
        setBMI("");
        setInterpretation(bmiValue);
      }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (m):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
      {interpretation && <p>Interpretation: {interpretation}</p>}
    </div>
  );
}

export default BMICalculatorComponent;
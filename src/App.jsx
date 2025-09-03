import { useState } from "react";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";
import ControlButton from "./components/ControlButton";
import Display from "./components/Display";

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");

  const handleNumber = (num) => {
    setExpression((prev) => prev + num);
  };

  const handleOperator = (op) => {
    setExpression((prev) => prev + " " + op + " ");
  };

  const handleClear = () => {
    setExpression("");
    setResult("0");
  };

  const handleDecimal = () => {
    setExpression((prev) => prev + ".");
  };

  const handleEquals = () => {
    try {
      const evalResult = eval(expression.replace(/x/g, "*"));
      setResult(evalResult.toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-700 to-slate-950">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <Display expression={expression} result={result} />

        <div className="grid grid-cols-4 gap-2">
          <ControlButton id="clear" label="AC" onClick={handleClear} />
          <OperatorButton id="divide" value="/" onClick={handleOperator} />
          <OperatorButton id="multiply" value="*" onClick={handleOperator} />
          <OperatorButton id="subtract" value="-" onClick={handleOperator} />

          {[7, 8, 9].map(n => (
            <NumberButton key={n} id={["seven", "eight", "nine"][n - 7]} value={n} onClick={handleNumber} />
          ))}
          <OperatorButton id="add" value="+" onClick={handleOperator} />

          {[4, 5, 6].map(n => (
            <NumberButton key={n} id={["four", "five", "six"][n - 4]} value={n} onClick={handleNumber} />
          ))}

          {[1, 2, 3].map(n => (
            <NumberButton key={n} id={["one", "two", "three"][n - 1]} value={n} onClick={handleNumber} />
          ))}

          <NumberButton id="zero" value="0" onClick={handleNumber} />
          <ControlButton id="decimal" label="." onClick={handleDecimal} color="bg-gray-500" />
          <ControlButton id="equals" label="=" onClick={handleEquals} color="bg-green-600" />
        </div>
      </div>
    </div>
  );
}

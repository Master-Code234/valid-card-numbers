import React, { useState } from "react";

export default function IsCardValid() {
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(validateCardNumber(cardNumber));
  };

  const validateCardNumber = () => {
    if (cardNumber === "") {
      return false;
    }

    const cardNumbers = cardNumber.split("").map(Number);
    let everyOtherNum = cardNumbers.map((num, index) =>
      index % 2 === 0 ? num * 2 : num
    );
    everyOtherNum = everyOtherNum.map((num) => (num > 9 ? num - 9 : num));
    const total = everyOtherNum.reduce((num, index) => num + index, 0);
    return total % 10 === 0;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="cardInput" onChange={handleChange} />
        <button type="submit">Validate</button>
      </form>
      <h2>{isValid ? "Card is Valid" : "Card is Invalid"}</h2>
    </div>
  );
}

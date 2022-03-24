import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export const Sort = ({ radioValue, setRadioValue }) => {
  const [checked, setChecked] = useState(false);

  const radios = [
    { name: "All", value: 0 },
    { name: "Book", value: 1 },
    { name: "Game", value: 2 },
    { name: "Film", value: 3 },
  ];

  return (
    <ButtonGroup className="mb-2">
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant="secondary"
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

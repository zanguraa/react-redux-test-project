import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeColor() {
  const [color, setColor] = useState("black");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter color"
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
      <button onClick={() => dispatch(changeColor("black"))}>Reset Color</button>
    </div>
  );
}

export default ChangeColor;

import { useState } from "react";
import { Colorbox } from "./Colorbox";

export function Setcolor() {
  const [color, setcolor] = useState("");
  const styles = {
    background: color,
    width: "90%",
  };
  const intial_colorlist = ["red", "green", "blue", "yellow", "pink"];
  const [colorlist, setcolorlist] = useState(intial_colorlist);

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          style={styles}
          onChange={(res) => {
            setcolor(res.target.value);
          }}
          class="form-control mt-5 mb-5"
          placeholder="Enter color name"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        ></input>
        <div class="input-group-append">
          <button
            onClick={() => {
              setcolorlist([...colorlist, color]);
            }}
            class="btn btn-success btn-outline-secondary mt-5 mb-5"
            type="button"
            id="button-addon2"
          >
            setcolor
          </button>
        </div>
      </div>
      {colorlist.map((color) => (
        <Colorbox color={color} />
      ))}
    </div>
  );
}

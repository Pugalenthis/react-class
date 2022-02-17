import { useState } from "react";
import { Colorbox } from "./Colorbox";
import TextField from "@mui/material/TextField";
import { Fragment } from "react";

export function Setcolor() {
  const [color, setcolor] = useState("");

  const intial_colorlist = ["red", "green", "blue", "yellow", "pink"];

  const [colorlist, setcolorlist] = useState(intial_colorlist);

  return (
    <div>
      <div class="container-fluid" id="setcolor-container-fluid">
        <div className="container" id="setcolor-container">
          <div className="row">
            <div className="col-12">
              <div className="input-group mb-3">
                <TextField
                  size="medium"
                  id="outlined-basic"
                  className="colorbox-input mt-5 mb-5"
                  onChange={(res) => {
                    setcolor(res.target.value);
                  }}
                  label="Enter color name"
                  variant="outlined"
                />
                <div className="input-group-append">
                  <button
                    onClick={() => {
                      setcolorlist([...colorlist, color]);
                      console.log(colorlist, color);
                    }}
                    className="btn btn-success btn-outline-secondary mt-5 mb-5"
                    type="button"
                    id="button-addon2"
                  >
                    Add color
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {colorlist.map((color, index) => (
              <Colorbox color={color} id={index} />
            ))}
          </div>
        </div>
            </div>
      </div>
  );
}

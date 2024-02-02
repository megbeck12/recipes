import React, { useState } from "react";
import "./Popup.css";

export default function Popup() {
    // const [popup, setPopup] = useState(false);

  return (
    <div class="popup">
      Click me!
      <span class="popuptext" id="myPopup">
        Popup text...
      </span>
    </div>
  );
}

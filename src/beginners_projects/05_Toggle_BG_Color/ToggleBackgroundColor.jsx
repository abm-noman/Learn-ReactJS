import { useState } from "react";
import "../05_Toggle_BG_Color/style.css";

const ToggleBackgroundColor = () => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [buttonStyle, setButtonStyle] = useState("white");

    const handleClick = () => {
    setBgColor(bgColor === "white" ? "black" : "white");
    setTextColor(bgColor === "white" ? "white" : "black");
    setButtonStyle(bgColor === "white" ? "black" : "white");
  };

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {bgColor === "white" ? "Dark Mode" : "Light Mode"}
      </button>

        <section className="content">
        <h1>Toggle Background Color</h1>
        </section>


    </div>
  );
};

export default ToggleBackgroundColor;

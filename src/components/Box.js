import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <div
      className="box"
      style={styles}
      onClick={() => props.click(props.id)}
    ></div>
  );
}

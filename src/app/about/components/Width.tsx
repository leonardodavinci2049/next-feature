"use client";
import React, { useState } from "react";

const Width = () => {
  const [width, setwidth] = useState(0);
  const [anabled, setanabled] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ color: anabled ? "green" : "red" }}>
        largura da tela {width}
      </div>
      <button
        className=""
        style={{
          background: anabled ? "#222" : "#444",
          color: "#fff",
          border: "1px solid #666",
          borderRadius: "4px",
          padding: "8px 16px",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onClick={() => setanabled((b) => !b)}
      >
        Ativar
      </button>
    </>
  );
};

export default Width;

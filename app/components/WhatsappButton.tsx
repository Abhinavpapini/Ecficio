import React from "react";

const WhatsappButton = () => {
  return (
    <a
      href="https://chat.whatsapp.com/F0er3pkBf46DlGZE43Etis"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px", // Adjust to avoid overlap with scroll-to-top button
        left: "20px", // Move to the bottom-left corner
        zIndex: 1000,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="white"
        width="36px"
        height="36px"
      >
        <path d="M24 4C12.954 4 4 12.954 4 24c0 3.99 1.08 7.73 2.96 10.96L4 44l9.04-2.96C16.27 42.92 20.01 44 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36c-3.54 0-6.84-1.04-9.64-2.8l-6.76 2.2 2.2-6.76C9.04 30.84 8 27.54 8 24c0-8.84 7.16-16 16-16s16 7.16 16 16-7.16 16-16 16zm9.48-11.88c-.52-.26-3.08-1.52-3.56-1.7-.48-.18-.84-.3-1.2.3-.34.6-1.36 1.96-1.66 2.36-.3.4-.6.46-1.12.16-.52-.26-2.2-.84-4.2-2.7-1.56-1.4-2.6-3.12-2.92-3.64-.3-.52-.04-.8.24-1.06.26-.26.52-.6.78-.92.26-.3.34-.52.52-.86.16-.34.08-.66-.04-.92-.12-.26-1.18-3.12-1.62-4.28-.42-1.16-.84-1.02-1.2-1.02-.3 0-.66-.04-1-.04-.34 0-.92.14-1.4.7-.48.56-1.88 1.9-1.88 4.6 0 2.7 2 5.32 2.28 5.68.26.34 3.92 6.04 9.52 8.28 1.34.56 2.38.9 3.22 1.16 1.34.42 2.56.36 3.52.22 1.06-.14 3.28-1.34 3.76-2.66.5-1.34.5-2.52.36-2.74-.14-.22-.5-.36-1.06-.64z" />
      </svg>
    </a>
  );
};

export default WhatsappButton;

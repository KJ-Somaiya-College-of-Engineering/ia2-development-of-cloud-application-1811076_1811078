import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;

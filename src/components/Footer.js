/* ===== App Dependencies ===== */
import React from "react";
/* ============ Code ============ */

const Footer = () => {
  let now = new Date().getFullYear();
  return (
    <footer className="footer">
      <h4 className="footer__copyright">&copy; {now} Linas Mackonis</h4>
    </footer>
  );
};
export default Footer;

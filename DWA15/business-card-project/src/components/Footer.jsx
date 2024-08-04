import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <img src="/twitter.svg" alt="twitter" className="footer--link_item" />
      </a>

      <a href="#">
        <img src="/facebook.svg" alt="facebook" className="footer--link_item" />
      </a>

      <a href="#">
        <img
          src="/instagram.svg"
          alt="instagram"
          className="footer--link_item"
        />
      </a>

      <a href="#">
        <img src="/linkedin.svg" alt="linkedin" className="footer--link_item" />
      </a>

      <a href="#">
        <img src="/github.svg" alt="github" className="footer--link_item" />
      </a>
    </div>
  );
}

export default Footer;

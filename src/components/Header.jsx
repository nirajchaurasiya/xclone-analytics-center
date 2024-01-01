import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-column">
        <div className="header-container-logo">
          <img src="/xlogo-removebg-preview.png" alt="" />
          <p>Analytics</p>
        </div>
        <div className="home-links">
          <ul>
            <li>Home</li>
          </ul>
        </div>
      </div>

      {/* Second column */}
      <div className="header-column">
        <div className="home-links">
          <ul>
            <li>
              <a href="https://docs.xclone.xyz/">Documentation</a>
            </li>
            <li>
              <a href="https://docs.xclone.xyz">Help?</a>
            </li>
          </ul>
        </div>

        <div className="header-profile-logo">
          <img src="/pfp.png" alt="" />
          <p>Analytics</p>
        </div>
      </div>
    </div>
  );
}

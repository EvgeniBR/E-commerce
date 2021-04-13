import React from "react";
import "./MenuItem.styles.scss";
const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl}) no-repeat center center/cover`,
        }}
      >
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW!!</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

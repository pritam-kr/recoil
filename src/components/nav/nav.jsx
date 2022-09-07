import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
     <section className="wrapper nav-wrapper">
     <div className="left-side logo">
        <h1 className="headings text-xl site-title">Binary Notes</h1>
      </div>

      <div className="middle-side search"> 
      <input type="search" placeholder="search" className="input search-input"
      />
      </div>

      <div className="right-side center user-avatar">
        <img
          src={
            "https://res.cloudinary.com/dhqxln7zi/image/upload/v1651587060/user_ma86ud.png"
          }
          alt="user-avatar"
          className="img img-responsive nav-avatar"
        />
      </div>
     </section>
    </nav>
  );
};

export { Nav };

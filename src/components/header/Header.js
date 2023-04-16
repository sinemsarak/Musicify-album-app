import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./header.css";
import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';

const Header = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alertify.success("Signed out successfully, hope to see you again user :)")

      })
      .catch((error) => console.log(error));
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo" style={{fontFamily:"papyrus"}}>
          Musicify
        </a>
        {authUser ? (
          <>
            <p className="welcome__large">Welcome {authUser.email}</p>
            <p className="welcome__small">WELCOME</p>
            <button onClick={userSignOut} className="google-btn">
              <div className="btn-text">
                <p>Log Out</p>
              </div>
            </button>
          </>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Header;

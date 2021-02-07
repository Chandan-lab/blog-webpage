import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/home.css";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login__message">
          <h2>📗</h2>
          <h2>A Readers paradise!</h2>
          <h4>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs.
          </h4> 
          <GoogleLogin
            clientId="464577397735-uk4lc10t5sprubgctkibua179tr831t8.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
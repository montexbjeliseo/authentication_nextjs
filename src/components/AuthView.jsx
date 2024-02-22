'use client';
import React from "react";
import { useSelector } from "react-redux";


const AuthViewer = () => {

  const authState = useSelector((state) => state.auth.authState);
  
  return (
    <div>
      {authState ? <p className="text-green-500">You are logged in</p> : <p className="text-red-500">You are logged out</p>}
    </div>
  );
};
export default AuthViewer;
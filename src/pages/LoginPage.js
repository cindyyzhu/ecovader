import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

function LoginPage() {
  return (
    <main className="Login Page">
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </main>
    );
 }
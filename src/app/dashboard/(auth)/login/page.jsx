"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const { status } = useSession();
  const router = useRouter();
  const params = useSearchParams();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (params.get("error")) setError(params.get("error"));
    if (params.get("success")) setSuccess(params.get("success"));
  }, [params]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // prevent auto redirect
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      setError("");
      router.push("/dashboard"); // manual redirect
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>

      <span className={styles.or}>- OR -</span>

      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;

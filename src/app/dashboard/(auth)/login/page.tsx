"use client";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface LoginProps {
  url: string;
}

const Login: React.FC<LoginProps> = ({ url }) => {
  const { status } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
    return null;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form[0] as HTMLInputElement).value;
    const password = (form[1] as HTMLInputElement).value;

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ?? "Welcome Back"}</h1>
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
        <button type="submit" className={styles.button}>
          Login
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className={`${styles.button} ${styles.google}`}
      >
        Login with Google
      </button>

      <span className={styles.or}>- OR -</span>

      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>

      {/* Uncomment if you want GitHub login
      <button
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        className={`${styles.button} ${styles.github}`}
      >
        Login with Github
      </button>
      */}
    </div>
  );
};

export default Login;

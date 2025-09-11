"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const { status, data: sessionData } = useSession();
  const router = useRouter();

  // Safe fetcher
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // Only fetch when user is available
  const { data, mutate, error, isLoading } = useSWR(
    sessionData?.user?.name ? `/api/posts?username=${sessionData.user.name}` : null,
    fetcher
  );

  // Handle unauthenticated redirect
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: sessionData.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log("Error creating post:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log("Error deleting post:", err);
    }
  };

  if (status === "loading") {
    return <p>Loading session...</p>;
  }

  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading && <p>Loading posts...</p>}
          {error && <p className={styles.error}>Failed to load posts</p>}
          {!isLoading &&
            !error &&
            data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  {post.img ? (
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={200}
                      height={100}
                    />
                  ) : (
                    <div className={styles.noImage}>No Image</div>
                  )}
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image URL" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }

  return null; // avoids flicker
};

export default Dashboard;

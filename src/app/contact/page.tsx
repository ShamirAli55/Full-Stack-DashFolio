import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact Page",
};

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="Contact illustration"
            fill
            className={styles.image}
            priority
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Message"
            cols={30}
            rows={10}
          ></textarea>
          <Button href="#" name="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

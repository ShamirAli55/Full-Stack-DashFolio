import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat: string) => {
  const data = items[cat];
  if (!data) notFound();
  return data;
};

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const Category = ({ params }: CategoryPageProps) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button name="See More" href="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

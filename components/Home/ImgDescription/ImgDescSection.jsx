import styles from "./ImageSection.module.scss";
import Img from "next/image";

function ImgDescSection() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Img
          src="https://images.unsplash.com/photo-1567804154474-380ce535360e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          width="421"
          height="452"
        />
      </div>
      <div className={styles.textWrapper}>
        <h4 className={styles.tag}>Make a World of a Difference</h4>
        <h2 className={styles.title}>CARE Giver Job Opportunities</h2>
        <p className={styles.description}>
          Your compassion and heart can truly make a difference in the lives of
          aging adults. Home Instead needs individuals who are inspired to help
          others. Find a career with your local office today.
        </p>
      </div>
    </section>
  );
}

export default ImgDescSection;

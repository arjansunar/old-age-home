import Button from "../Button/Button";
import styles from "./Hero.module.scss";
import Img from "next/image";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textWrapper}>
        <span className={styles.tag}>Professional, medical and courteous </span>
        <h2 className={styles.title}>Extraordinary, simple caregiving</h2>
        <p className={styles.subtitle}>
          Give your loved ones care they deserve
        </p>
        <div className={styles.btnWrapper}>
          <Button text="Our Services" />
          <Button text="Get Involved" variant="outlined" />
        </div>
      </div>
      <div>
        <div className={styles.imageWrapper}>
          <Img
            src="https://images.unsplash.com/photo-1567804154474-380ce535360e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            width="421"
            height="452"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

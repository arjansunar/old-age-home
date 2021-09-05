import Button from "../Button/Button";
import styles from "./Hero.module.scss";
// import Img from "next/image";

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
          {/* <Img src="" width="421" height="452" /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;

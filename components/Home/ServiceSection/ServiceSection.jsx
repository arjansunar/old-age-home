import styles from "./Service.module.scss";
import Img from "next/image";

const cards = [
  {
    title: "Hourly Care",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
tristique ipsum.`,
    image: "/assets/home/care.svg",
  },
  {
    title: "Hourly Care",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
tristique ipsum.`,
    image: "/assets/home/care.svg",
  },
  {
    title: "Hourly Care",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
tristique ipsum.`,
    image: "/assets/home/care.svg",
  },
  {
    title: "Hourly Care",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
tristique ipsum.`,
    image: "/assets/home/care.svg",
  },
  {
    title: "Hourly Care",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
tristique ipsum.`,
    image: "/assets/home/care.svg",
  },
  {
    title: "Hourly Care",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
tristique ipsum.`,
    image: "/assets/home/care.svg",
  },
];

function ServiceSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>Elderly Care Services</h3>
        <p className={styles.description}>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>
      <div className={styles.gridWrapper}>
        {cards.map((el, i) => (
          <Card {...el} key={i} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, description, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Img src={image} width="50" height="50" />
      </div>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
export default ServiceSection;

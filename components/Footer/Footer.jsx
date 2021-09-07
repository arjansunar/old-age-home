import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.itemWrapper}>
        <h3 className={styles.title}>About</h3>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
      <div className={styles.itemWrapper}>
        <h3 className={styles.title}>Services</h3>
        <div className={styles.description}>
          <ul className={styles.list}>
            <li>Hourly Care</li>
            <li>Overnight Care</li>
            <li>Nursing Care</li>
            <li>Alzimer Care</li>
            <li>Palliative Care</li>
          </ul>
        </div>
      </div>
      <div className={styles.itemWrapper}>
        <h3 className={styles.title}>Working Hours</h3>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
      <div className={styles.itemWrapper}>
        <h3 className={styles.title}>Location</h3>
        {/* map */}
        <div className={styles.mapouter}>
          <div className={styles.gmap_canvas}>
            <iframe
              height="230"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

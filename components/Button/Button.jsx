import styles from "./Button.module.scss";

// button varent: primary, outlined
function Button({ text, variant }) {
  return (
    <button
      className={variant == "outlined" ? styles.outlined : styles.primary}
    >
      {text}
    </button>
  );
}

export default Button;

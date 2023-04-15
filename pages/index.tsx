import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <a href="https://discord.gg/wBt2F9H" className={styles.btnDisc}>
        <img
          className={styles.imgBtnDisc}
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"
          alt="Discord"
        />
      </a>
    </div>
  );
}

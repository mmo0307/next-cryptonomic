import styles from './ui.module.scss';

const Dots = () => (
  <div className={styles.overlay}>
    <div className={styles.block}>
      <span className={styles.dot} />

      <div className={styles.dots}>
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);

export { Dots };

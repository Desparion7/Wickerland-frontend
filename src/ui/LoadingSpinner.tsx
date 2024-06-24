import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner_box}>
      <p className={styles.spinner_box_text}>
        Backend is hosted on a free renderer server and may take a few moments
        to start up ....
      </p>
      <div className={styles.lds_ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingSpinner;

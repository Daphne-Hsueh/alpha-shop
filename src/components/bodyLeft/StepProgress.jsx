import styles from "../../styles/StepProgress.module.css"

function StepProgress() {
  return (
    <div className={styles.stepProgress}>

      <h2 className={styles.registerTitle}>結帳</h2>
     
      <section className={styles.progressContainer + " col col-12"}>
        <span className={styles.progressGroup} data-phase="address">
          <span className={styles.progressIcon}>
            <span className={styles.text}>1</span>
          </span>
          <span className={styles.progressLabel}>寄送地址</span>
        </span>
        <span className={styles.progressBar} data-order={1} />
        <span className={styles.progressGroup} data-phase="shipping">
          <span className={styles.progressIcon}>
            <span className={styles.text}>2</span>
          </span>
          <span className={styles.progressLabel}>運送方式</span>
        </span>
        <span className={styles.progressBar} data-order={2} />
        <span className={styles.progressGroup} data-phase="credit-card">
          <span className={styles.progressIcon}>
            <span className={styles.text}>3</span>
          </span>
          <span className={styles.progressLabel}>付款資訊</span>
        </span>
      </section>
    </div>
  );
}

export default StepProgress
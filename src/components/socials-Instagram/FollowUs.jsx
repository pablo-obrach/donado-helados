import styles from './FollowUs.module.css'
const FollowUs = ({social}) => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>SEGUINOS EN</h2>
      <h2 className={styles.subtitle}>{social}</h2>
    </div>
  )
}

export default FollowUs

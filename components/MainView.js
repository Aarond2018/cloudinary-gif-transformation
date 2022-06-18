import styles from '../styles/Home.module.css'

export default function MainView({ reqStatus, transformedImg, callFunction }) {
  const handleClick = () => {
   callFunction()
  }

  return (
    <div className={styles.container}>
        <div className={styles.input}>
          <div>
            <img src="https://res.cloudinary.com/ddmm5ofs1/image/upload/v1655146319/giphy_ilmc8i.gif" alt="input-gif" />
          </div>
          <button onClick={handleClick} disabled={reqStatus === "loading..."}>Set delay</button>
          <p>{reqStatus}</p>
        </div>
        <div className={styles.output}>
          {transformedImg && <img src={transformedImg} alt="transformed-img" className={styles.full_width} />}
        </div>
      </div>
  )
}

import styles from '../../app/home.module.css'

interface CardsServicesProps {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
}

const CardsServices = ({ icon, title, description, buttonText = "Saiba mais" }: CardsServicesProps) => {

    return (
        <div className={styles.featureBox}>
          <div className={styles.iconTitle}>
            <img src={icon} alt={title} />
            <h3>{title}</h3>
          </div>
          <p>{description}</p>
          <button className={styles.learnMoreButton}>{buttonText}</button>
        </div>
    );
}

export default CardsServices;
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'

function Card( {id, titulo, capa} ) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={iconeFavoritar} alt="Favoritar Filme" className={styles.favoritar}></img>
        </div>
    )
}
export default Card
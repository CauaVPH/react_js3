import styles from './Teme.module.css'

const Teme = (props) => {

    function retorna() {
        return "button1"
    }
    
    return (
        <div>
            <button id="button1" className={styles.button1} onClick={props.color}>Mudar tema</button>
        </div>
    )

}

export default Teme;
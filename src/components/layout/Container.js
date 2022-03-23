import styles from '../css/Container.module.css'

function Container(props){
    return (
        <div className={`${styles.container}`}>
            {props.children}
        </div>
    )
}

export default Container
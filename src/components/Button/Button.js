import styles from './Button.module.scss';

const Button = props => {
    return(
        <div>
            <button className={styles.button}> {props.placeholder} </button>
        </div>
    );
};

export default Button;

import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header} >
                <h1 className={styles.title}>Things to do<span>soon</span></h1>
                </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <Column icon = 'gamepad' title='Games'/>
                <Column icon = 'film' title='Movies'/>
                <Column icon = 'book' title='Books'/>
            </section>
        </div>
    );
};

export default List;
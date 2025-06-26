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
                <Column title='Games'/>
                <Column title='Movies'/>
                <Column title='Music'/>
            </section>
        </div>
    );
};

export default List;
import styles from './Hero.module.scss';

const Hero = () => {
    return (
      <div className={styles.hero}>
        <h1 className={styles.title}>My first React App</h1>
        <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
      </div>
    );
  };

  export default Hero;



//import './Hero.scss';

//const Hero = () => {
  //  return (
    //    <div>
     //       <h1>My first react app</h1>
    //        <p>A simple to do app, with lists, and columns</p>
     //   </div>
   // );
//};

//export default Hero;
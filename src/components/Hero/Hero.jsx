import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, welcome!</h1>
        <p className={styles.description}>
         
I'm Thapelo, a Software Test Automation Engineer. I create automated tests, perform manual tests, collaborate with Dev and QA teams, and integrate tests into CI/CD pipelines.

        </p>
        <a href="mailto:thapelomusa37@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/prop.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
};

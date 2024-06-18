import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
           About 
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutt.png")} alt="me Setting with a laptop" 
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Quality Assurance Engineer</h3>
                        <br></br>
                        <p>
                        I'm a <b>Quality Assurance Engineer</b> with experience in developing and executing test cases to 
                        ensure software meets quality standards. I identify, record, and track bugs to resolution, collaborate
                        with developers to improve product quality and ensure timely releases.
        
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Test Automation Engineer</h3><br></br>
                        <p>Design, develop, and maintain automated test scripts, integrate automated tests into the CI/CD pipeline
                            and ensure robustness, scalability, and reliability of automated tests, also collaborate with QA and development teams to enhance automation frameworks
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Performance Test Engineer</h3><br></br>
                        <p>
                        As a Performance Test Engineer, I identify software vulnerabilities through penetration testing and ethical hacking. 
                        I implement security measures and collaborate with development teams to integrate robust security practices into 
                        the software lifecycle.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

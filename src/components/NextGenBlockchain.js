import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.footer}>
      
      <div className="container">
        
          <h3 className="text--center">Next Generation Blockchain Technology</h3>
        
        <div className="text--center">
          <img src={require("../../static/img/substrate.png").default} className={styles.featureSvg} alt="Substrate Logo" />
          <div>
          <p>Nuchain developed using Substrate.<br />
          Substrate is the most powerful blockchain technology available today.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

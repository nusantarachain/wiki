import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Decentralized Organization',
    Img: require('../../static/img/decentralized-org.png').default,
    description: (
      <>
        Build your on-chain representative organization, make it autonomous and programmable.
      </>
    ),
  },
  {
    title: 'Platform of Trust',
    Img: require('../../static/img/platform-of-trust.png').default,
    description: (
      <>
        Makes your data your own, authentic, and safe. Resilient access with
        Decentralized ID (DId) and perfect platform for providing trustworthy assets.
      </>
    ),
  },
  {
    title: 'Programmable',
    Img: require('../../static/img/programmable.png').default,
    description: (
      <>
        <p>Build App for the future. Web 3.0 support, serverless, and fully decentralized.</p>
        <a href="/docs/build/build-intro">read more</a>
      </>
    ),
  }
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureSvg({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

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

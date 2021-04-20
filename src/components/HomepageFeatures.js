import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Decentralized Organization',
    Img: require('../../static/img/decentralized-org.png').default,
    description: (
      <>
        Build your on-chain representative organization, make it programmable, autonomous and eternal.
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
  },
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

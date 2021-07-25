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
        <p>Makes your data your own, authentic, and safe. Resilient access with
        Decentralized ID (DIDs).</p>
        <a href="/docs/build/build-did">read more</a>
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

const FeatureList2 = [
  {
    title: 'Supply Chain',
    Svg: require('../../static/img/supply-chain.svg').default,
    description: (
      <>
        <p>Records all production activity on-chain, make it transparent and globally verifiable.</p>
        <a href="/docs/build/supply-chain">read more</a>
      </>
    ),
  },
  {
    title: 'Digital Certificate',
    Svg: require('../../static/img/certificate.svg').default,
    description: (
      <>
        <p>Publish and keep the digital certificate on-chain. Make it globally available and eternal.</p>
        <a href="/docs/build/build-certificate">read more</a>
      </>
    ),
  },
  {
    title: 'Digital Assets',
    Svg: require('../../static/img/digital-assets.svg').default,
    description: (
      <>
        Create, publish, and monetize your digital assets. Build your own NFT.
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {FeatureList2.map((props, idx) => (
            <FeatureSvg key={idx + '2'} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

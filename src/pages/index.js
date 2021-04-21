import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">

                <div className="row">
                    <div className="col col--6">
                        <div className="hero-tagline" style={{textAlign: "center"}}>
                        <h1 className="hero__title">Nusantara Chain</h1>
                        <p className="hero__subtitle">{siteConfig.tagline}</p>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary button--lg"
                                to="/docs/general/welcome">
                                Let's do it!</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col col--6">
                        <img src="/img/nuchain-ecosystem.png" class="main-logo" />
                    </div>
                </div>



            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Nusantara Chain / Rantai Nusantara"
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}

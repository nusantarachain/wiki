import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageFooter from '../components/HomepageFooter';

import ReactTypingEffect from 'react-typing-effect';

function HomepageHeader() {
    // const { siteConfig } = useDocusaurusContext();
    const Taglines = [
        "Keamanan total pada privasi", 
        "Kepastian kepemilikan aset digital",
        "Kekuasan mengontrol data sendiri", 
        "Sarana tanpa perantara",
        "Transparansi dalam proses"
    ];
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">

                <div className="row">
                    <div className="col col--6">
                        <div className={styles.heroTagline} style={{ textAlign: "center" }}>
                            <h1 className="hero__title">Nusantara Chain</h1>
                            <p className={clsx('hero__subtitle')}>
                                Selamat Datang di <strong>Web Generasi ke 3</strong>.<br />
                                Sebuah Dunia yang memberikan Anda:
                            </p>
                            <div className={clsx('hero__subtitle', styles.tagline)}>
                                <ReactTypingEffect
                                    text={Taglines}
                                    speed={30}
                                    eraseSpeed={20}
                                    eraseDelay={2000}
                                    typingDelay={500}
                                    cursor="▌"
                                    className={clsx(styles.taglineFont)}
                                />
                            </div>
                            <div className={styles.buttons}>
                                <Link
                                    className="button button--secondary button--lg"
                                    to="/docs/general/welcome">
                                    Masuk!</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--6">
                        <img src="/img/nuchain-ecosystem.png" className="main-logo" />
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
            <HomepageFooter />
        </Layout>
    );
}

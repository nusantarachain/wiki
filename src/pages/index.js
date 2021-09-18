import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import NextGenBlockchain from '../components/NextGenBlockchain';
import HomePagePartnerships from '../components/HomepagePartnerships';

import ReactTypingEffect from 'react-typing-effect';

function HomepageHeader() {
    // const { siteConfig } = useDocusaurusContext();
    const Taglines = [
        translate({id: "frontpage.msg.securePrivacy", message: "Keamanan pada privasi"}),
        translate({id: "frontpage.msg.ownedAssets", message: "Kepemilikan aset digital"}),
        translate({id: "frontpage.msg.selfDataControl", message: "Kekuasaan data sendiri"}),
        translate({id: "frontpage.msg.mediumNoThirdParty", message: "Sarana tanpa perantara"}),
        translate({id: "frontpage.msg.transparency", message: "Transparansi dalam proses"})
    ];
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <div className={styles.heroTagline} style={{ textAlign: "center" }}>
                            <h1 className="hero__title">Nusantara Chain</h1>
                            <p className={clsx('hero__subtitle')}>
                                <Translate id="frontpage.welcomeTo">Selamat Datang di</Translate> <strong><Translate id="frontpage.welcomeToWebGen3">Web Generasi ke 3</Translate></strong>.<br />
                                <Translate id="frontpage.welcomeToGiveYou">Sebuah Dunia yang memberikan Anda</Translate>:
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
                                    <Translate id="frontpage.enterButton">Masuk!</Translate></Link>
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

function NuchainVideo() {
    return (
        <div className={styles.videoContainer + ' row'}>
            <div className={'col-lg-1 ' + styles.colCentered}>
            <iframe width="700" height="394" src="https://www.youtube.com/embed/AqyNvEf5gwk" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Nusantara Chain / Rantai Nusantara"
            description={translate({id: "text.nextGenWebPlatform", message: "Platform Web Generasi ke 3.0"})}>
            <HomepageHeader />
            <main>
                <NuchainVideo />
                <HomepageFeatures />
                <NextGenBlockchain />
                <HomePagePartnerships />
            </main>
            
        </Layout>
    );
}

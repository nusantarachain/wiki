import React from 'react';
import styles from './HomepagePartnerships.module.css';

function PartnerItem({image, link, title}) {
    return (
        <a href={link} target="_blank">
            <img src={image.default} className={styles.partner} alt={title} />
        </a>
    )
}


export default function HomePagePartnerships() {
    return (
        <section className={styles.partnerships}>

            <div className="container">

                <h2 className="text--center">Partnerships</h2>

                <div className="text--center">
                    <PartnerItem image={require("../../static/img/amikom-logo.png")} link="https://amikom.ac.id/" title="Amikom Logo" />
                    <PartnerItem image={require("../../static/img/ansvia-logo.png")} link="https://ansvia.com/" title="Ansvia Logo" />
                    <PartnerItem image={require("../../static/img/delameta-logo.png")} link="https://delameta.com/" title="Delameta Logo" />
                    <PartnerItem image={require("../../static/img/pramjazz-logo.png")} link="https://www.prambananjazz.com/" title="Prambanan Jazz Logo" />
                    <PartnerItem image={require("../../static/img/akbara-logo.png")} link="https://www.akbara.ac.id/" title="Akbara Logo" />
                    <PartnerItem image={require("../../static/img/satnet-logo.png")} link="#" title="Satnet Logo" />
                    <PartnerItem image={require("../../static/img/sms-logo.png")} link="https://solusimedia.co.id" title="Solusi Media Semesta Logo" />
                    <PartnerItem image={require("../../static/img/unsiq-logo.png")} link="https://unsiq.ac.id" title="Universitas Sains Al-Qur'an" />
                    <PartnerItem image={require("../../static/img/mulo-logo.png")} link="https://muloapp.id" title="Mulo App" />
                </div>
            </div>
        </section>
    );
}


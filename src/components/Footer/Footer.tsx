import React from 'react'
import styles from './Footer.module.css'
import classNames from "classnames";
export const Footer: React.FC = ()=>{

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__addr}>
                    <h1 className="footer__logo">TJ Brand</h1>

                    <h2>Contact</h2>

                    <address>
                        5534 Somewhere In. The World 22193-10212<br/>

                        <a className={styles.footer__btn} href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>

                <ul className={styles.footer__nav}>
                    <li className={styles.nav__item}>
                        <h2 className={styles.nav__title}>Media</h2>

                        <ul className={styles.nav__ul}>
                            <li>
                                <a href="#">Online</a>
                            </li>

                            <li>
                                <a href="#">Print</a>
                            </li>

                            <li>
                                <a href="#">Alternative Ads</a>
                            </li>
                        </ul>
                    </li>

                    <li className={classNames(styles.nav__item, styles.nav__extra)}>
                        <h2 className={styles.nav__title}>Technology</h2>

                        <ul className={classNames(styles.nav__ul, styles.nav__ul)}>
                            <li>
                                <a href="#">Hardware Design</a>
                            </li>

                            <li>
                                <a href="#">Software Design</a>
                            </li>

                            <li>
                                <a href="#">Digital Signage</a>
                            </li>

                            <li>
                                <a href="#">Automation</a>
                            </li>

                            <li>
                                <a href="#">Artificial Intelligence</a>
                            </li>

                            <li>
                                <a href="#">IoT</a>
                            </li>
                        </ul>
                    </li>

                    <li className={styles.nav__item}>
                        <h2 className={styles.nav__title}>Legal</h2>

                        <ul className={styles.nav__ul}>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#">Terms of Use</a>
                            </li>

                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={styles.legal}>
                    <p>&copy; 2019 Something. All rights reserved.</p>

                    <div className={styles.legal__links}>
                        <span>Made with <span className={styles.heart}>♥</span> remotely from Anywhere</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
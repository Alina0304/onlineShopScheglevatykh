import React from 'react';
import logo from './logo.svg';
import { Card } from '../Card/Card'
import styles from './Root.module.css'
import data from '../../data.json'
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";

export const Root: React.FC = () => {
    return ( <React.Fragment>
        <main className={styles.main}>
            <Header/>
            <section className={styles.products}>
                <ul className={styles.products__list}>
                    {
                        data.map(item => (<Card name={item.name} price={item.price} coming_soon={item.coming_soon} sold={item.sold} image_url={item.image_url} sizes={item.sizes}/>))
                    }
                </ul>
            </section>
            <Footer />
        </main>
    </React.Fragment>)
}


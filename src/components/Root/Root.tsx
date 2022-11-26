import React from 'react';
import { Card } from '../Card/Card'
import styles from './Root.module.css'
import data from '../../data.json'
import {Footer} from "../Footer/Footer";
import Header from "../Header/Header";

import {connect} from 'react-redux'

// @ts-ignore
const Root: React.FC = ({products}) => {
    return ( <React.Fragment>
        <main className={styles.main}>
            <Header/>
            <section className={styles.products}>
                <ul className={styles.products__list}>
                    {
                        // @ts-ignore
                        products.map(item => (<Card key={item.id} id={item.id} name={item.name} price={item.price} coming_soon={item.coming_soon} sold={item.sold} image_url={item.image_url} sizes={item.sizes}/>))
                    }
                </ul>
            </section>
            <Footer />
        </main>
    </React.Fragment>)
}

// @ts-ignore
const mapStateToProps = state => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapStateToProps)(Root)

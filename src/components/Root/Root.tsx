import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card'
import styles from './Root.module.css'
import data from '../../../data.json'
import {Footer} from "../Footer/Footer";
import Header from "../Header/Header";

import {connect} from 'react-redux'
import { getProducts } from '../../redux/shopping/shopping-actions';

// @ts-ignore
const Root: React.FC = ({products, getProducts}) => {
    const [data, setData]=useState([])
    useEffect(()=>getProducts(), [])
        // @ts-ignore
    // getProducts().then(res => setData(res.payload))
    console.log('pr', products)
        // getProducts().then(res=>setData(res.payload))
    console.log('res', data)
    // setData(getProducts())

    return ( <React.Fragment>
        <main className={styles.main}>
            <Header/>
            <section className={styles.products}>
                <ul className={styles.products__list}>
                    {
                        // @ts-ignore
                        products?.map(item => (<Card key={item.id} id={item.id} name={item.name} price={item.price} coming_soon={item.coming_soon} sold={item.sold} image_url={item.image_url} sizes={item.sizes}/>))
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
        products: state.shop.filteredProducts,
        // filteredProducts: state.shop.filteredProducts,
    }
}

// @ts-ignore
// const dispatchToProps = dispatch => ({
//     getProducts: () => dispatch(getProducts())
// })

export default connect(mapStateToProps, {getProducts})(Root)


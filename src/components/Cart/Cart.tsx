import React, {useEffect, useState} from "react";
import styles from './Cart.module.css'
import classNames from "classnames";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import CartItem from "../CartItem/CartItem";
import Header from "../Header/Header";

// @ts-ignore
const Cart: React.FC = ({cart}) => {
    console.log('cart', cart)
    const [totalPrice, setTotalPrice]=useState(0)
    const [totalItems, setTotalItems]=useState(0)

    useEffect(()=>{
        let items =0
        let price = 0

        // @ts-ignore
        cart.forEach(item=>{
            console.log('item5', item)
            console.log('items', items)
            console.log('price', price)
            items +=item.qty
            price+=item.qty*item.price
        })
        setTotalItems(items)
        setTotalPrice(price)

    }, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems])
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.window}>
                    <div className={styles.order_info}>
                        <div className={styles.order_info_content}>
                            <h2>Order Summary</h2>
                            <div className={styles.line}/>
                            {cart.map(
                                // @ts-ignore
                                item=> {
                                    console.log('item', item)

                                    return(
                                        // @ts-ignore
                                        <CartItem key={item.id} itemData={item} />
                                    )
                                }
                            )}
                            <div className={styles.line}/>
                            <div className={styles.total} >
                            <span className={styles.totalEnd}>
                                     <div className={classNames(styles.thin, styles.dense)}>total items</div>
                                     <div className={classNames(styles.thin, styles.dense)}>Delivery</div>
                                    TOTAL
                            </span>
                            <span className={styles.summ}>
                                    <div className={classNames(styles.thin, styles.dense)}>{totalItems}</div>
                                    <div className={classNames(styles.thin, styles.dense)}>{totalPrice*0.03}$</div>
                                {totalPrice}$
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className={styles.credit_info}>
                        <div className={styles.credit_info_content}>
                            <table className={styles.half_input_table}>
                                <tr><td>Please select your card: </td><td><div className={styles.dropdown} id='card-dropdown'><div className={styles.dropdown_btn} id='current-card'>Visa</div>
                                    <div className={styles.dropdown_select}>
                                        <ul>
                                            <li>Master Card</li>
                                            <li>American Express</li>
                                        </ul></div>
                                </div>
                                </td></tr>
                            </table>
                            <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' className={styles.credit_card_image} id='credit-card-image'/>
                            Card Number
                            <input className={styles.input_field}/>
                            Card Holder
                            <input className={styles.input_field}/>
                            <table className={styles.half_input_table}>
                                <tr>
                                    <td> Expires
                                        <input className={styles.input_field}/>
                                    </td>
                                    <td>CVC
                                        <input className={styles.input_field}/>
                                    </td>
                                </tr>
                            </table>
                            <button className={styles.pay_btn}>Checkout</button>

                        </div>
                    </div>
                </div>
            </div>
            </>
)
}

// @ts-ignore
const mapStateToProps = state =>{
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart)
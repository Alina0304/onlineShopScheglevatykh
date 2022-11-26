import React from 'react';
import {connect} from "react-redux"
import {addToCart} from "../../redux/shopping/shopping-actions";
import classNames from 'classnames'
import styles from './Item.module.css'
import Header from "../Header/Header";



// @ts-ignore
const Item: React.FC = ({ currentItem, addToCart}) => {

    return (
            <>
                <Header/>
                <div className={classNames(styles.container, styles.page_wrapper)}>
                    <div className={styles.page_inner}>
                        <div className={styles.row}>
                            <div className={styles.el_wrapper}>
                                <div className={styles.box_up}>
                                    <img className={styles.img} src={currentItem.image_url} alt="" />
                                        <div className={styles.img_info}>
                                            <div className={styles.info_inner}>
                                                <span className={styles.p_name}>{currentItem.name}</span>
                                                <span className={styles.p_company}>Yeezy</span>
                                            </div>
                                            <div className={styles.a_size}>Available sizes : <span className={styles.size}>{currentItem.sizes}</span>
                                            </div>
                                        </div>
                                </div>

                                <div className={styles.box_down}>
                                    <div className={styles.h_bg}>
                                        <div className={styles.h_bg_inner}></div>
                                    </div>

                                    <a className={styles.cart} href="#">
                                        <span className={styles.price}>${currentItem.price}</span>
                                        <span className={styles.add_to_cart}>
                    <button onClick={()=>addToCart(currentItem.id)} className={styles.txt}>Add in cart</button>
            </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

)
}

// @ts-ignore
const mapStateToProps = (state) =>{
    return {
        currentItem: state.shop.currentItem,
    }
}
// @ts-ignore
const mapDispatchToProps = dispatch =>{
    return{
        // @ts-ignore
        addToCart: (id)=> dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)

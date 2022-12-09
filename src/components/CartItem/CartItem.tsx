import React from "react";
import styles from './CartItem.module.css'
import classNames from "classnames";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {removeFromCart} from "../../redux/shopping/shopping-actions";

let cartItems = JSON.parse(localStorage.getItem("cart") || '[]') || []

// @ts-ignore
const CartItem: React.FC = ({itemData, removeFromCart, onRemoveClick, totalItem}) => {

    return (
        <>
            <tbody>
            <tr>
                <td><img src={itemData.image_url} className={styles.full_width}/>
                </td>
                <td>
                    <br/> <span className={styles.thin}>{itemData.name}</span>
                    <br/> Free Run 3.0 Women<br/> <span className={classNames(styles.thin, styles.small)}> Color: Grey/Orange, Size: {itemData.sizes.map((item: string)=>`${item} `)}<br/><br/></span>
                    <td>
                        <button onClick={()=> removeFromCart(itemData.id)} className={styles.delete}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/></svg>                        </button>
                    </td>
                </td>
            </tr>
            </tbody>
        </>
    )
}

// @ts-ignore
const mapDispatchToProps = dispatch => {
    return {
        // @ts-ignore
       removeFromCart: (id)=> dispatch(removeFromCart(id))
    }
}
export default connect(null, mapDispatchToProps)(CartItem)
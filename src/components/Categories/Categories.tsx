import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {addToCart, filterProducts} from "../../redux/shopping/shopping-actions";
import styles from "../Categories/Categories.module.css";

// @ts-ignore
const Categories = ({filterProducts, products}) =>{
    let size
   const [open, setOpen] = useState(false)
    const handleChange = (event: any) =>{
        setOpen(!open);
    }
    const sizeClick = (event: any) =>{
        filterProducts(products, Number(event.target.innerText))
        setOpen(!open);
    }
    return (
        <div className={styles.dropdown}>
            <button onClick={handleChange}>Sizes</button>
            {open ? (
                <ul className={styles.menu}>
                    {[32, 34, 36, 38, 40, 42, 44, 46].map((menuItem, index) => (
                        <li key={index} className={styles.menu_item} onClick={(event)=>sizeClick(event)}>{menuItem}</li>
                    ))}
                </ul> ): null}
        </div>
    )
}

// @ts-ignore
const mapStateToProps=state=>({
    products: state.shop.products,
    size: state.shop.size
})

export default connect(mapStateToProps, {filterProducts})(Categories)

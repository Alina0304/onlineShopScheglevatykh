import React from 'react'
import {LabelProps } from './types'
import styles from './Label.module.css'
import classNames from "classnames";

export const Label: React.FC<LabelProps> = ({...props})=>{

    return (
        <>
            <div className={classNames(styles.products__info, styles.products__information, styles.products_disabled)}>
                    <div className={classNames(styles.products__main, styles.products__main_sold)}>
                        <h3 className={styles.products__header}>{props.name}</h3>
                        <span className={styles.products__price}>{props.price}</span>
                    </div>
                    {props.sold && <span className={styles.products__sold}>sold out</span>}
            </div>
        </>
    )
}
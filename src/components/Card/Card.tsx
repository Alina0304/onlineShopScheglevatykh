import React from 'react'
import {CardProps } from './type'
import styles from './Card.module.css'
import {Label} from "../Label/Label";
export const Card: React.FC<CardProps> = ({...props})=>{

    return (
        <>
            <a href="/#" className={styles.item}>
                <img src={props.image_url} alt="" className={styles.img} />
                    {props.coming_soon &&  <span className={styles.expected}>{props.coming_soon}</span>}
                <Label {...props} />
            </a>
        </>
    )
}
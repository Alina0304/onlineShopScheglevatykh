import React, {useEffect} from 'react'
import {LabelProps } from './types'
import styles from './Label.module.css'
import { Link } from 'react-router-dom';
import classNames from "classnames";
import {connect} from 'react-redux'
import {addToCart, loadCurrentItem} from "../../redux/shopping/shopping-actions";


// @ts-ignore
const Label: React.FC<LabelProps> = ({addToCart, loadCurrentItem, ...props })=>{
    console.log('curIt', loadCurrentItem(props))

    return (
        <>
            <div className={classNames(styles.products__info, styles.products__information, styles.products_disabled)}>
                <button className={styles.cart} onClick={(event)=>{addToCart(props.id)}}><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M9.104 7.542v-2.48H6.625v-1.75h2.479V.833h1.75v2.479h2.479v1.75h-2.479v2.48ZM5.833 18.333q-.708 0-1.208-.5t-.5-1.208q0-.708.5-1.208t1.208-.5q.709 0 1.209.5.5.5.5 1.208t-.5 1.208q-.5.5-1.209.5Zm8.313 0q-.708 0-1.208-.5t-.5-1.208q0-.708.5-1.208t1.208-.5q.708 0 1.208.5t.5 1.208q0 .708-.5 1.208t-1.208.5Zm-8.334-4.125q-.937 0-1.447-.843-.511-.844-.032-1.677l1.084-2-2.959-6.271H.792v-1.75h2.77l3.563 7.479h5.792l3.187-5.834 1.542.876L14.438 10q-.23.417-.626.656-.395.24-.874.24H6.771l-.875 1.562h9.958v1.75Z"/></svg></button>
                <Link to={`/item/${props.id}`}>
                <button className={styles.visibility} onClick={()=>{loadCurrentItem(props)}}><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10 13.5q1.458 0 2.479-1.021Q13.5 11.458 13.5 10q0-1.458-1.021-2.479Q11.458 6.5 10 6.5q-1.458 0-2.479 1.021Q6.5 8.542 6.5 10q0 1.458 1.021 2.479Q8.542 13.5 10 13.5Zm0-1.5q-.833 0-1.417-.583Q8 10.833 8 10q0-.833.583-1.417Q9.167 8 10 8q.833 0 1.417.583Q12 9.167 12 10q0 .833-.583 1.417Q10.833 12 10 12Zm0 4q-2.979 0-5.417-1.635Q2.146 12.729 1 10q1.146-2.729 3.583-4.365Q7.021 4 10 4q2.979 0 5.417 1.635Q17.854 7.271 19 10q-1.146 2.729-3.583 4.365Q12.979 16 10 16Zm0-6Zm0 4.5q2.333 0 4.312-1.208 1.98-1.209 3.042-3.292-1.062-2.083-3.042-3.292Q12.333 5.5 10 5.5T5.688 6.708Q3.708 7.917 2.646 10q1.062 2.083 3.042 3.292Q7.667 14.5 10 14.5Z"/></svg></button>
                </Link>
                    <div className={classNames(styles.products__main, styles.products__main_sold)}>
                        <h3 className={styles.products__header}>{props.name}</h3>
                        <span className={styles.products__price}>{props.price}</span>
                        <span className={styles.products__price}>{props.price}</span>
                    </div>
                    {props.sold && <span className={styles.products__sold}>sold out</span>}
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => any) => {
    return {
       addToCart: (id: any) => dispatch(addToCart(id)),
        loadCurrentItem: (item: any)=>dispatch(loadCurrentItem(item)),
    }
}


export default connect(null, mapDispatchToProps)(Label)
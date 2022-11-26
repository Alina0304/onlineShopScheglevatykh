import React from 'react';
import styles from './Contact.module.css'
import {Map} from '../Map/Map'
import {Link} from "react-router-dom";
import Header from "../Header/Header";


export const Contact: React.FC = () => {

    return (
        <>
            <Header />
        <div className={styles.container}>
            <div className={styles.main}>
                <h2>Contact Us</h2>
                <p>Perfection in small thing</p>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div id={styles.map}>
                        <Map/>
                        </div>
                </div>
                <div className={styles.column}>
                    <form>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                <label htmlFor="country">Country</label>
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                                <label htmlFor="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.." className={styles.comment}/>
                                <input type="submit" value="Отправить"/>
                    </form>
                </div>
            </div>
        </div>
        </>
)
}


import React, {useEffect} from 'react'
import styles from './Header.module.css'
import classNames from "classnames";
let cache = ""
let cache2 = JSON.parse(localStorage.getItem("cache2") || '[]') || []
export const Header = ()=> {
    let search: HTMLInputElement, list: any
    useEffect(()=>{
        search = document.getElementById('search_input') as HTMLInputElement
        list = document.getElementById('search_list')
        console.log('list', list)
    }, [cache2])
    const handlerRemove = (e: any) =>
    {
        const removingElem = e.target.closest('#search_list-item')
        e.target.closest('#search_list-item').remove()
        let items = JSON.parse(localStorage.getItem("cache2") || '[]')
        localStorage.clear()
        cache2=[]
        // @ts-ignore
       items.forEach((item)=> {
           if (item !== removingElem.textContent){
               cache2.push(item)
           }
       })
        localStorage.setItem('cache2', JSON.stringify(cache2))
        list.style.display = 'none'
    }
    const handlerInserting = (e: any) =>
    {
        const clickElem = e.target
            if (clickElem.textContent != null) {
                search!.value = ' '
                search!.value  += clickElem.textContent
                list.style.display = 'none'
            }
    }
    useEffect(()=>{
        list.style.display = 'none'
    })
    const handlerChange=(event: any)=> {
        cache=event.target.value
    }
    const onFocusHandler =()=>{
        if (cache2 !== null) {
            list.style.display = 'flex'
        }
    }
    const handleSearch = () =>{
        cache && cache2.push(cache)
        localStorage.setItem('cache2', JSON.stringify(cache2))
            drawList()
        list.style.display = 'none'
    }

    // @ts-ignore
    const drawList = () =>{
        return (
            <>
                {
                    // @ts-ignore
                    cache2.map(item => (
                        <div className={styles.search_list_item} id="search_list-item" onClick={(e)=>handlerInserting(e)}>
                            {item}
                            <div className={styles.remove_button} id='remove_button' onClick={(e)=>handlerRemove(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                                    <path
                                        d="M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z"/>
                                </svg>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }



    return (
        <>
            <header className={styles.site__header}>
                <div className={styles.header__wrapper}>
                    <a href="#" className={styles.brand}>JV Brand</a>
                    <div className={styles.search} id='#search'>
                        <input autoComplete="off" type="text" placeholder="Искать здесь..." className={styles.search_input} id='search_input' onFocus={onFocusHandler} onChange={(event)=>handlerChange(event)}/>
                        <div className={styles.search_list} id='search_list'>
                            {
                                drawList()
                            }
                        </div>
                        <button type="submit" id='search_button' onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 32 32" width="32px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
                    </div>
                    <nav className="nav">
                        <ul className={styles.nav__wrapper}>
                            <li className={styles.nav__item}><a href="#">Home</a></li>
                            <li className={styles.nav__item}><a href="#">About</a></li>
                            <li className={styles.nav__item}><a href="#">Services</a></li>
                            <li className={styles.nav__item}><a href="#">Hire us</a></li>
                            <li className={styles.nav__item}><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            </>
    )
}

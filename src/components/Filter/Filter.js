//import {useState} from 'react';
import {useRef,useEffect}from'react'
import '../../scss/style.scss';
import '../Header/Header.scss';
function Filter(props) {
    const {handleFilmChange,title}=props
    const input = document.querySelector('.header__input');
    const search_icon = document.querySelector('.search-icon');

    function show_searchField() {
        input.classList.add('active');
        search_icon.classList.add('active');
    }
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[inputRef])
    return(
        <div>
            <svg className="search-icon" onClick={show_searchField} width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5182 19.1046L26 24.4215L24.1889 26.1785L18.7084 20.8603C16.6692 22.4462 14.1327 23.3088 11.5192 23.3052C5.16058 23.3052 0 18.2987 0 12.13C0 5.96132 5.16058 0.954834 11.5192 0.954834C17.8777 0.954834 23.0383 5.96132 23.0383 12.13C23.042 14.6655 22.1529 17.1262 20.5182 19.1046ZM17.9507 18.1832C19.575 16.5627 20.4822 14.3904 20.4785 12.13C20.4785 7.32717 16.4685 3.43821 11.5192 3.43821C6.56848 3.43821 2.55981 7.32717 2.55981 12.13C2.55981 16.9316 6.56848 20.8218 11.5192 20.8218C13.8491 20.8254 16.0883 19.9453 17.7587 18.3695L17.9507 18.1832V18.1832Z"/>
            </svg>
            <input className="header__input" type="text" name="title" value={title} onChange={handleFilmChange} ref={inputRef}/>
        </div>
    )
}
export default Filter;
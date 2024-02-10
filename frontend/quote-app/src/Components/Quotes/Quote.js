import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Quote.module.css';



const Quote = (props) => {

  let navigate = useNavigate();
  const showQuoteHnadler = (id)=>{
    navigate(`/quotes/${id}`);
  }
  const deleteQuote=async(id)=>{
    try {
      console.log(id);
      let res = await axios.delete(`http://localhost:8080/deletequote/${id}`);
      console.log(res);
      window.location.reload();
  } catch (e) {
      console.log('Cannot update the quote at this moment');
  }
  }

  return (
    <li className={styles.quote}>
        <span>
            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </span>
        <button onClick={()=>deleteQuote(props.id)}>delete your quote</button>
        <button onClick={()=>showQuoteHnadler(props.id)} >View full Quote</button>

    </li>
  )
}

export default Quote
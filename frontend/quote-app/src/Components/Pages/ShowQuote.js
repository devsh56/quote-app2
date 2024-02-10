import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ShowQuotes = () => {
    const params = useParams();
    let navigate = useNavigate();

    let [quote,setQuote] = useState({
        author:'', 
        text:''
    })

    async function fetchQuote(){
        let res = await axios.get(`http://localhost:8080/quotes/${params.id}`)
        let {author , text} = res.data;
        // console.log(author);
        // console.log(text);
        setQuote({author , text});
        // console.log(quote);
    }

    useEffect(()=>{
        fetchQuote();
    } , [])
    function EditQuotes(id){
        navigate(`/quotes/edit/${id}`);
    }


  return (
    <div>
        <p>{quote.text}</p>
        <h2>{quote.author}</h2>
        <button onClick={() => EditQuotes(params.id)}>Edit</button>
    </div>
  )
}

export default ShowQuotes
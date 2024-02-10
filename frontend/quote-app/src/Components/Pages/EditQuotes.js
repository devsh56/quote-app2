import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './NewQuote.module.css';

const EditQuotes = () => {
    const inputtext = useRef();
    const textarea = useRef();
    const navigate = useNavigate();
    const params = useParams();

    let [quote, setQuote] = useState({
        author: '',
        text: ''
    });

    async function fetchQuote() {
        try {
            let res = await axios.get(`http://localhost:8080/quotes/edit/${params.id}`);
            let { author, text } = res.data;
            setQuote({ author, text });
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    useEffect(() => {
        fetchQuote();
    }, [params.id]);

    const updateValue = async (e) => {
        e.preventDefault();
        const author = inputtext.current.value;
        const text = textarea.current.value;
        try {
            let res = await axios.patch(`http://localhost:8080/updatequotes/${params.id}`, { author, text });
            console.log(res);
            navigate('/');
        } catch (e) {
            console.log('Cannot update the quote at this moment');
        }
    };

    return (
        <form onSubmit={updateValue} className={styles['new-quote-form']}>
            <div>
                <label htmlFor='author'>Author Name</label>
                <input type="text" id='author' placeholder="Author's Name" ref={inputtext} defaultValue={quote.author} />
            </div>

            <div>
                <label htmlFor="quote">Enter your quote</label>
                <textarea name="" id="quote" cols={15} rows={4} placeholder="Author's Quote" ref={textarea} defaultValue={quote.text}></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default EditQuotes;

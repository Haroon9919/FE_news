import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlebyID } from '../api calls/api';
import axios from 'axios';

function Articlepage (){
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(false);
    const { article_id } = useParams()



useEffect(() => {
    setLoading(true);
    axios.get(getArticlebyID)
    .then((response)=> response.json())
    .then((body) => {
        setArticle(body.articles)
        setLoading(false)
    })
    },[])


} 
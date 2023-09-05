import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://haroons-news.onrender.com/api'
});

export const getAllArticles = () => {
  return newsApi.get('/articles').then((response) => {
    return response.data.articles;
    
  });
};


export const getArticlebyID = (article_id) => {
    return newsApi.get(`articles/${article_id}`).then((response) => {
      return response.data.articles; 
    });
  };
  
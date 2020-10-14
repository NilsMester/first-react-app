import "./Body.css";
import React, { useState } from 'react';
import BlogArticle from "./BlogArticle";
import AddArticleForm from "./AddArticleForm";
import articleArray from "./ArticleArray";


function Body() {

    const [articleList, setArticleList] = useState([]);

    return (
        <main>
        {articleList
            .map(article => <BlogArticle key={article.id}
            article={article}/>)}

        <AddArticleForm
            onAddArticleEntry={articleData =>
            setArticleList([...articleList, articleData])}/>
        </main>
    );
}

export default Body;
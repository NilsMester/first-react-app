import React, { useState } from 'react';
import BlogArticle from "./BlogArticle";
import AddArticleForm from "./AddArticleForm";



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
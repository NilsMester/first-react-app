import React from "react";
import LikeButton from "./LikeButton";

function BlogArticle ({article}){
    const { articleTitle, articleSubtitle, articleTextBody } = article;

    return (
        <div>
            <article>
                <section>
                    <h2>{articleTitle}</h2>
                    <h3>{articleSubtitle}</h3>
                    <p>{articleTextBody}</p>
                    <LikeButton></LikeButton>
                </section>
                <img className="blog-thumbnail" src="/images/oldman.jpg"></img>
            </article>
        </div>
    );
}

export default BlogArticle;
import React from "react";
import LikeSection from "./LikeSection";
import ArticleStyling from "./ArticleStyling";
import SectionStyling from "./SectionStyling";
import BlogThumbnail from "./BlogThumbnail";

function BlogArticle ({article}){
    const { articleTitle, articleSubtitle, articleTextBody } = article;

    return (
        <div>
            <ArticleStyling>
                <SectionStyling>
                    <h2>{articleTitle}</h2>
                    <h3>{articleSubtitle}</h3>
                    <p>{articleTextBody}</p>
                    <LikeSection></LikeSection>
                </SectionStyling>
                <BlogThumbnail src="/images/oldman.jpg"></BlogThumbnail>
            </ArticleStyling>
        </div>
    );
}

export default BlogArticle;
import React from 'react';
import "./Body.css";

function Body() {
    return (
        <body>
        <article>
            <section>
                <CreateArticle article={articleArray[0]}/>
            </section>
            <img className="blog-thumbnail" src="/images/oldman.jpg"></img>
        </article>
        <article>
            <section>
                <CreateArticle article={articleArray[1]}/>
            </section>
            <img className="blog-thumbnail" src="/images/oldman.jpg"></img>
        </article>
        </body>

    );
}

function redirect (url){
    window.location=url;
}

function CreateArticle (props){
    const article = props.article;
    const { title,subtitle, textBody, button } = article;

    return (
        <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{textBody}</p>
        <button className="button" onClick={()=>redirect(button)}>Button</button>
        </div>
    );
}


const articleArray = [
    {title: "Blog Entry #1",
        subtitle: "totally a subtitle",
        textBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        img: "images/oldman.jpg",
        button: "https://google.com"},

    {title: "Blog Entry #2",
        subtitle: "totally a subtitle",
        textBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        img: "images/oldman.jpg",
        button: "https://google.com"}
]

export default Body;
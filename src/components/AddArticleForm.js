import React, {useState} from 'react';

export default function AddArticleForm({onAddArticleEntry}){
    const [articleTitle, setArticleTitle] = useState("");
    const [articleSubtitle, setArticleSubtitle] = useState("");
    const [articleTextBody, setArticleTextBody] = useState("");

    return <form>
        <label>
            Title
            <input value={articleTitle} onChange={event => setArticleTitle(event.target.value)}/>
        </label>
        <label>
            Subtitle
            <input value={articleSubtitle} onChange={event => setArticleSubtitle(event.target.value)}/>
        </label>
        <label>
            TextBody
            <input value={articleTextBody} onChange={event => setArticleTextBody(event.target.value)}/>
        </label>

        <button
            disabled={articleTitle.length === 0 && articleSubtitle.length === 0 && articleTextBody.length === 0}
            onClick={() => {
                onAddArticleEntry({id: articleTitle.length+1, articleTitle, articleSubtitle, articleTextBody});
                setArticleTitle("");
                setArticleSubtitle("");
                setArticleTextBody("");
            }}>
            Create Article
    </button>



    </form>
}
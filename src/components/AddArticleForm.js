import React, {useState} from 'react';
import FormStyling from "./FormStyling";
import TextBodyInput from "./TextBodyInput";
import ArticleButton from "./ArticleButton";
import SectionStyling from "./SectionStyling";
import RegularInput from "./RegularInput";

export default function AddArticleForm({onAddArticleEntry}){
    const [articleTitle, setArticleTitle] = useState("");
    const [articleSubtitle, setArticleSubtitle] = useState("");
    const [articleTextBody, setArticleTextBody] = useState("");

    return <FormStyling>
        <SectionStyling>
        <label>
            Title
            <RegularInput value={articleTitle} onChange={event => setArticleTitle(event.target.value)}/>
        </label>
        <label>
            Subtitle
            <RegularInput value={articleSubtitle} onChange={event => setArticleSubtitle(event.target.value)}/>
        </label>
        </SectionStyling>
        <label>
            Text
            <TextBodyInput value={articleTextBody} onChange={event => setArticleTextBody(event.target.value)}/>
        </label>

        <ArticleButton
            disabled={articleTitle.length === 0 || articleSubtitle.length === 0 || articleTextBody.length === 0}
            onClick={() => {
                onAddArticleEntry({id: articleTitle.length+1, articleTitle, articleSubtitle, articleTextBody});
                setArticleTitle("");
                setArticleSubtitle("");
                setArticleTextBody("");
            }}>
            Create Article
    </ArticleButton>



    </FormStyling>
}
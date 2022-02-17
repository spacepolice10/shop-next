import { useEffect } from "react";
import testData from "../testData";

export default function Blog () {
    const lastArticles = testData.blog.map(article => article.title)
    useEffect(() => {
        
    })
    return (
        <div>
            { lastArticles }
        </div>
    )
}
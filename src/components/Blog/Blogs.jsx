import { useEffect, useState } from "react";
import './blogs.scss'
import React from 'react'
import axios from "axios";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import './markdown.scss';
import { useParams } from "react-router-dom";
const Blogs = () => {
    const {id,itemId} = useParams()
    const [richText, setRichText] = useState([]);
   
    const url = `http://localhost:1337/api/blogs`;
    const language = "javascript";
    const headerId = itemId;
    const forItemId = id;
    const [forHeaderId, setForHeaderId] = useState(0);
    const [showRichText, setShowRichText] = useState('');
    useEffect(() => {
        axios.get(url)
            .then(res => {
                const [bigData] = res?.data?.data;
                setRichText(bigData?.attributes?.blog);
            })
       
    }, [])
    function showRichText1() {richText.map(item => {
        if (item.id == headerId) {
            item.info.map(item => {
                if (item.id == forItemId) {
                    setShowRichText(item.richText);
                }
            })
        }
    })}

    return (


        <div className="markdown">

            <div className='markdown-container'>
                <ReactMarkdown

                    children={showRichText == '' ? showRichText1(): showRichText }  //
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, "")}
                                    style={nightOwl} // theme
                                    language={language}
                                    // language={match[1]}
                                    PreTag='section' // parent tag
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </div>
        </div>

    )
};

export default Blogs;
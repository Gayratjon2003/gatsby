import React, { useEffect, useState } from "react";
import '../assets/style/markdown.scss';
// import axios from "axios";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { blogdata } from "../components/Blog/blogdata";
import Navbar from "../components/navbar/Navbar";
const Markdown = (props) => {
    const [richText, setRichText] = useState([]);
    // const url = `http://localhost:1337/api/blogs`;
    const language = "javascript";
    const headerId = props.location.state.id;
    const forItemId = props.location.state.itemId;
    const [showRichText, setShowRichText] = useState('');
    useEffect(() => {
        // axios.get(url)
        //     .then(res => {
        //         const [bigData] = res?.data?.data;
        //         setRichText(bigData?.attributes?.blog);
        //     })
        setRichText(blogdata);
    }, [])
    function showRichText1() {
        richText.map(item => {
            if (item.id == headerId) {
                item.info.map(item => {
                    if (item.id == forItemId) {
                        setShowRichText(item.richText);
                    }
                })
            }
        })
    }

    return (
        <>
        <Navbar />
        <div className="markdown">
            <div className='markdown-container'>
                <ReactMarkdown
                    children={showRichText == '' ? showRichText1() : showRichText}  //
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
        </>
        

    )
};

export default Markdown;
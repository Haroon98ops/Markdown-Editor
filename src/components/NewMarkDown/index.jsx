import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import './markdown.css';

function MarkDown() {
    const [marker, setMarker] = useState("Welcome to Markdown Editor");
    const dispatch = useDispatch();
    const { title, para } = useSelector((state) => state);
    const search = () => {
        const val = window.getSelection().toString();
        if (val) {
            fetch(
                `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=${val}`
            )
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    const data = { ...result };
                    const key = Object.keys(result.query.pages)[0];
                    const para = data.query.pages[key].extract;
                    const title = data.query.pages[key].title;
                    dispatch({ type: "SEARCH", payload: { pageID: key, para, title } });
                }).catch(error => {
                    throw error.message;
                });
        }
    };

    useEffect(() => {
        window.addEventListener('dblclick', () => {
            if (window.getSelection().toString() !== '') {
                search();
            }
        });
        return () => {
            window.addEventListener('dblclick', () => {
                if (window.getSelection().toString() !== '') {
                    search();
                }
            });
        }
    }, []);

    return <div className='main'>
        <div className='content-box'>
            <div className="markdown-box bg-ea">
                <h4 className='p-10 m-0'>Markdown</h4>
                <textarea rows="5" className='text-area p-10'
                    value={marker}
                    onChange={(e) => setMarker(e.target.value)}
                >{marker}</textarea>
            </div>
            <div className="markdown-box bg-ea">
                <h4 className='p-10 m-0'>Preview</h4>
                <ReactMarkdown className="markdown-css p-10">{marker}</ReactMarkdown>
            </div>
        </div>
        {title && (
            <>
                <h4 className="p-10 bg-ea m-0">Result</h4>
                <div className="result-box">
                    <h5>{title}</h5>
                    <p>{para || 'No detail'}</p>
                </div>
            </>
        )}
    </div>
}
export default MarkDown;
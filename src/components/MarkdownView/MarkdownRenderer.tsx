import React from 'react';
import Markdown from 'react-markdown';

interface MarkdownRendererProps {
    text: string
}

function MarkdownRenderer(markdownRendererProps: MarkdownRendererProps) {
    console.log(markdownRendererProps?.text)
    return <Markdown className="prose dark:prose-invert" children={markdownRendererProps?.text}/>
}

export default MarkdownRenderer
import React from 'react';
import Markdown from 'react-markdown';

interface MarkdownRendererProps {
    text?: string
}

function MarkdownRenderer(markdownRendererProps?: MarkdownRendererProps) {
    return <Markdown className="line-break" children={markdownRendererProps?.text} />
}

export default MarkdownRenderer
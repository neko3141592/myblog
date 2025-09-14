import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
            background: '#111',
            borderRadius: '8px',
            padding: '1.5em 2em',
            margin: '2em 0',
            boxSizing: 'border-box',
            overflowX: 'auto',
        }}
      codeTagProps={{ style: { fontSize: '1.2em', lineHeight: '1.8' } }}
    >
      {code}
    </SyntaxHighlighter>
  );
}

import DOMPurify from 'dompurify';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';
// import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// TODO: decorate syntax highlighting with prism
type Props = {
  id: string;
  textEditor: string;
};
export function MarkdownPreviewer({ id, textEditor }: Props) {
  const markdownText = marked(textEditor);
  const cleanMarksdownText = DOMPurify.sanitize(markdownText);

  marked.setOptions({
    breaks: true,
  });

  return (
    <article
      id={id}
      className="p-4 max-w-none bg-white prose prose-sm lg:prose-base prose-a:text-blue-600 hover:prose-a:text-blue-500"
      style={{ minHeight: '12rem' }}
      dangerouslySetInnerHTML={{ __html: cleanMarksdownText }}
    />
  );
}

/*
    <article
      id={id}
      // className="prose p-4 w-full min-h-full bg-white"
      className="p-4 w-full min-h-full bg-white"
      // dangerouslySetInnerHTML={{ __html: cleanMarksdownText }}
    >
      <ReactMarkdown
        className="prose prose-sm lg:prose-base max-w-none prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl"
        remarkPlugins={[remarkGfm]}
      >
        {textEditor}
      </ReactMarkdown>
    </article>
 */

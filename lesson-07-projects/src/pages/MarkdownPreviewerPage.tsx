import { useState } from 'react';
import { MarkdownPreviewer, Editor, WindowFrame } from '../components';
import { MarkdownStatus } from '../constants';

export function MarkdownPreviewerPage() {
  const [status, setStatus] = useState<MarkdownStatus>(MarkdownStatus.default);
  const [textEditor, setTextEditor] = useState<string>(`# Header 1
  ## Header 2
  ### Header 3
  There's also [links](https://www.freecodecamp.org)
  Inline code: \`<div></div>\`

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
  }
  \`\`\`

  1. And there are numbered lists too.
  2. Use just 1s if you want!
  3. And last but not least, let's not forget embedded images:

  > Block Quotes!

  You can also make text **bold**... whoa!

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

  return (
    <div className="pt-16 flex flex-col items-center w-full min-h-screen">
      <div className="flex flex-col w-full h-full max-w-2xl mt-4 mb-8 gap-4">
        <WindowFrame
          statusType={MarkdownStatus.editor}
          status={status}
          setStatus={setStatus}
          name="Editor"
        >
          <Editor
            id="editor"
            name="editor"
            status={status}
            textEditor={textEditor}
            setTextEditor={setTextEditor}
          />
        </WindowFrame>
        <WindowFrame
          statusType={MarkdownStatus.previewer}
          status={status}
          setStatus={setStatus}
          name="Previewer"
        >
          <MarkdownPreviewer id="preview" textEditor={textEditor} />
        </WindowFrame>
      </div>
    </div>
  );
}

/**
  User Story #1: I can see a textarea element with a corresponding id="editor".
  User Story #2: I can see an element with a corresponding id="preview".
  User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
  User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
  User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
  User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.
  Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements
*/

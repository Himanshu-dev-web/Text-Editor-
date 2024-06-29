import  { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor">
      <textarea value={code} onChange={handleChange} spellCheck="false" />
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              code,
              Prism.languages.javascript,
              'javascript'
            ),
          }}
        />
      </pre>
    </div>
  );
};

export default CodeEditor;

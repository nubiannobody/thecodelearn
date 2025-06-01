import React, { useState, useEffect } from 'react';
import { Maximize2, Copy, Check } from 'lucide-react';

type CodeEditorProps = {
  language: string;
  value: string;
  onChange?: (code: string) => void;
  readOnly?: boolean;
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  value,
  onChange,
  readOnly = false
}) => {
  const [code, setCode] = useState(value);
  const [isCopied, setIsCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setCode(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onChange && onChange(newCode);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div 
      className={`relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 ${
        isFullscreen ? 'fixed inset-0 z-50 m-4' : ''
      }`}
    >
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center">
          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
            language === 'php' ? 'bg-purple-500' : 
            language === 'typescript' ? 'bg-blue-500' : 
            'bg-blue-400'
          }`} />
          {language === 'php' ? 'PHP' : 
           language === 'typescript' ? 'TypeScript' : 
           language === 'jsx' ? 'React JSX' : 
           language}
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={copyToClipboard}
            className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded"
            aria-label="Copy code"
          >
            {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </button>
          <button 
            onClick={toggleFullscreen}
            className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded"
            aria-label="Toggle fullscreen"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="relative">
        <textarea
          value={code}
          onChange={handleChange}
          className="w-full p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-mono text-sm h-64 resize-none outline-none"
          readOnly={readOnly}
          style={{
            height: isFullscreen ? 'calc(100vh - 120px)' : '240px',
            tabSize: 2,
          }}
        />
        <pre className="absolute inset-0 p-4 font-mono text-sm overflow-auto pointer-events-none bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 rounded">
  <code className="language-text">{code}</code>
</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
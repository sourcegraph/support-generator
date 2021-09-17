// ANCHOR External Modules
import { useState, useEffect } from 'react';

// ANCHOR Internal Modules
import GenerateLink from './GenerateLink';

// ANCHOR CSS
import './GeneratedURI.css';



export default function GeneratedURI({
    selectedDeployment,
    selectedAction,
    namespace,
    option,
    generatedURI,
    setGeneratedURI,
    mode
}) {
    const [copiedUrl, setCopiedUrl] = useState(false);

    const copyUrl = () => {
        navigator.clipboard.writeText(generatedURI)
        setCopiedUrl(true);
    }

    const handleFocus = (e) => {
        e.target.select();
    }

    useEffect(() => {
        if (copiedUrl) {
            setTimeout(() => {
                setCopiedUrl(false);
            }, 3000);
        }
    }, [copiedUrl, setCopiedUrl])

    return (
        <div className="generated-uri-container">
            <input
                className={`generated-uri ${mode === 'dark' ? 'dark' : 'light'}`}
                type="text"
                placeholder="Generated URL will appear here."
                value={generatedURI}
                onFocus={handleFocus}
                readOnly
            />
            <div className="copied-url-container">
                {/* turn into seperate component */}
                <p className={`copied-message ${copiedUrl && "show"} ${mode === "dark" ? "dark" : "light"}`}>
                    URL copied to clipboard
                </p>


                <div className="btns-container-2">
                    <GenerateLink
                        deployment={selectedDeployment}
                        action={selectedAction}
                        namespace={namespace}
                        option={option}
                        setGeneratedURI={setGeneratedURI}
                        generatedURI={generatedURI}
                        mode={mode}
                    />
                    {generatedURI ? (
                        <button
                            className={`btn w-margin ${mode === "dark" ? "dark" : "light"}`}
                            onClick={copyUrl}
                        >
                            Copy URL
                        </button>

                    ) : (
                        <button
                            className={`btn w-margin ${mode === "dark" ? "dark" : "light"}`}
                            onClick={copyUrl}
                            disabled
                        >
                            Copy URL
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}
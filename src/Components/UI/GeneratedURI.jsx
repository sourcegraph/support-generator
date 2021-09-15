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
    setGeneratedURI
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
                className="generated-uri"
                type="text"
                placeholder="Generated URL will appear here."
                value={generatedURI}
                onFocus={handleFocus}
                readOnly
            />
            <div className="copied-url-container">
                <p className={`copied-message ${copiedUrl && "show"}`}>
                    URL copied to clipboard
                </p>
                <div>
                    <GenerateLink
                        deployment={selectedDeployment}
                        action={selectedAction}
                        namespace={namespace}
                        option={option}
                        setGeneratedURI={setGeneratedURI}
                        generatedURI={generatedURI}
                    />
                    {generatedURI ? (
                        <button
                            className="btn w-margin"
                            onClick={copyUrl}
                        >
                            Copy URL
                        </button>

                    ) : (
                        <button
                            className="btn w-margin"
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
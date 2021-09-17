import { useState, useEffect } from 'react';

import CopyBtn from '../UI/CopyBtn';
import CopyURLBtn from '../UI/CopyURLBtn';

import './GeneratedCommand.css';

export default function GeneratedCommand({
    selectedDeployment,
    selectedAction,
    command,
    generatedURI,
    setGeneratedURI,
    namespace,
    option,
    mode
}) {
    const [commandCopied, setCommandCopied] = useState(false);
    const [urlCopied, setUrlCopied] = useState(false);

    const copyURL = async () => {
        setGeneratedURI("");
        setCommandCopied(false);
        setUrlCopied(true);
        const BASE_URL = (window.location.href).split("?")[0];

        const DEPLOYMENT_PARAM = selectedDeployment ? `?deployment=${encodeURIComponent(selectedDeployment)}` : "";
        const ACTION_PARAM = selectedAction ? `&function=${encodeURIComponent(selectedAction)}` : "";
        const NAMESPACE_PARAM = namespace ? `&namespace=${namespace}` : "";
        const OPTION_PARAM = option ? `&option=${option}` : "";

        const QUERY_STRING = DEPLOYMENT_PARAM
            + ACTION_PARAM
            + NAMESPACE_PARAM
            + OPTION_PARAM;

        navigator.clipboard.writeText(`${BASE_URL}${QUERY_STRING}`);
        let content = await navigator.clipboard.readText();

        if (content) {
            setGeneratedURI(content);
        } else {
            console.log("Unable to copy this url.");
        }
    }

    const copyCommand = () => {
        navigator.clipboard.writeText(command);
        setUrlCopied(false);
        setCommandCopied(true);

    }

    useEffect(() => {
    }, [generatedURI])

    useEffect(() => {
        if (commandCopied) {
            setUrlCopied(false);
            setTimeout(() => {
                setCommandCopied(false);
            }, 3000);
        }

        if (urlCopied) {
            setCommandCopied(false)
            setTimeout(() => {
                setUrlCopied(false);
            }, 3000);
        }
    }, [commandCopied, setCommandCopied, urlCopied, setUrlCopied]);

    return (
        <div className="generated-command-container">
            <div className={`generated-command ${mode === "dark" ? "dark" : "light"}`}>
                {selectedDeployment === 'select-deployment' ? (
                    <>
                        [SELECT DEPLOYMENT TYPE and FUNCTION]
                    </>
                ) : (
                    <>
                        {command}
                    </>
                )}
            </div>
            <div className="btns-container">
                {commandCopied && (
                    <p className={`copied-message show ${mode === "dark" ? "dark" : "light"}`}>
                        Command copied to clipboard.
                    </p>
                )}
                {urlCopied && (
                    <p className={`copied-message show ${mode === "dark" ? "dark" : "light"}`}>
                        URL copied to clipboard.
                    </p>
                )}
                {(!urlCopied && !commandCopied) && (
                    <p className={`copied-message show ${mode === "dark" ? "dark" : "light"}`}>
                    </p>
                )}
                <div className={`btns`}>
                    <CopyBtn
                        selectedAction={selectedAction}
                        copyCommand={copyCommand}
                        mode={mode}
                    />
                    <CopyURLBtn
                        selectedAction={selectedAction}
                        copyURL={copyURL}
                        mode={mode}
                    />
                </div>

            </div>
        </div >
    )
}
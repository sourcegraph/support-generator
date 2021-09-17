import { useState, useEffect } from 'react';

import CopyBtn from '../UI/CopyBtn';
import CopyURLBtn from '../UI/CopyURLBtn';

import './GeneratedCommand.css';

export default function GeneratedCommand({
    selectedDeployment,
    selectedAction,
    command,
    generatedURI,
    mode
}) {
    const [commandCopied, setCommandCopied] = useState(false);
    const [urlCopied, setUrlCopied] = useState(false);

    console.log("command copied: ", commandCopied);
    console.log("url copied: ", urlCopied);

    const copyCommand = () => {
        navigator.clipboard.writeText(command);
        setCommandCopied(true);
        setUrlCopied(false);
    }

    const copyUrl = () => {
        navigator.clipboard.writeText(generatedURI)
        setUrlCopied(true);
        setCommandCopied(false);
    }

    console.log(copyUrl);

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
    }, [
        commandCopied,
        setCommandCopied,
        urlCopied,
        setUrlCopied
    ]);

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
                <p className={`copied-message ${(commandCopied || urlCopied) && "show"} ${mode === "dark" ? "dark" : "light"}`}>
                    {urlCopied && <>URL copied to clipboard.</>}
                    {commandCopied && <>Command copied to clipboard.</>}
                </p>
                <div>
                    <CopyBtn
                        selectedAction={selectedAction}
                        copyCommand={copyCommand}
                        mode={mode}
                    />
                    <CopyURLBtn
                        selectedAction={selectedAction}
                        copyUrl={copyUrl}
                        mode={mode}
                    />
                </div>

            </div>
        </div >
    )
}
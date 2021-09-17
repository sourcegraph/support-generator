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

    //FIXME need to change this so that url copies the first time you click it, not on the second time.

    const generateURL = () => {
        const BASE_URL = (window.location.href).split("?")[0];

        // if (generatedURI.length !== 0) {
        //     setGeneratedURI("");
        //     window.location.href = BASE_URL
        //     return;
        // }

        const DEPLOYMENT_PARAM = selectedDeployment ? `?deployment=${encodeURIComponent(selectedDeployment)}` : "";
        const ACTION_PARAM = selectedAction ? `&function=${encodeURIComponent(selectedAction)}` : "";
        const NAMESPACE_PARAM = namespace ? `&namespace=${namespace}` : "";
        const OPTION_PARAM = option ? `&option=${option}` : "";

        const QUERY_STRING = DEPLOYMENT_PARAM
            + ACTION_PARAM
            + NAMESPACE_PARAM
            + OPTION_PARAM;

        setGeneratedURI(`${BASE_URL}${QUERY_STRING}`)
        console.log(generatedURI);
    }

    const copyCommand = () => {
        navigator.clipboard.writeText(command);
        setCommandCopied(true);
        setUrlCopied(false);
    }

    const copyUrl = () => {
        generateURL();
        navigator.clipboard.writeText(generatedURI)
        setUrlCopied(true);
        setCommandCopied(false);
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
                <div className="btns">
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
import { useState, useEffect } from 'react';

// ANCHOR CSS
import CopyBtn from '../UI/CopyBtn';
import './Command.css';

export default function Command({
    selectedDeployment,
    command,
}) {
    const [commandCopied, setCommandCopied] = useState(false);

    const copyCommand = () => {
        navigator.clipboard.writeText(command);
        setCommandCopied(true);
    }

    useEffect(() => {
        if (commandCopied) {
            setTimeout(() => {
                setCommandCopied(false);
            }, 3000);
        }
    }, [commandCopied, setCommandCopied]);

    return (
        <div className="command-container">
            <div className="command-input-container">
                {selectedDeployment === "select-deployment" ? (
                    <input
                        className="command"
                        type="text"
                        placeholder="[SELECT DEPLOYMENT TYPE and FUNCTION]"
                    />
                ) : (
                    <input
                        className="command"
                        type="text"
                        defaultValue={command}
                    />
                )}
            </div>
            <div className="btns-container">
                <p className={`copied-message ${commandCopied && "show"}`}>
                    Command copied to clipboard.
                </p>
                <CopyBtn
                    selectedDeployment={selectedDeployment}
                    copyCommand={copyCommand}
                />
            </div>

        </div>

    )
}
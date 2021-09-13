/**
 * 
 * NOTE: 
 * 
 * This component is deprecated and has been replaced by the GeneratedCommand component.
 * I did so because using an input was unnecessary and it was easier to style and deal with 
 * a div instead.
 * 
 * Keeping here for the time being. Will delete after the new component has been tested
 * by the team.
 * 
 */





// ANCHOR External Modules
import { useState, useEffect } from 'react';

// ANCHOR Internal Modules
import CopyBtn from '../UI/CopyBtn';

// ANCHOR CSS
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
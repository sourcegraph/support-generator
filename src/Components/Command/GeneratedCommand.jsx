import { useState, useEffect } from 'react';

import CopyBtn from '../UI/CopyBtn';

import './GeneratedCommand.css';

export default function GeneratedCommand({
    selectedDeployment,
    selectedAction,
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
        <div className="generated-command-container">
            <div className="generated-command">
                {selectedDeployment === 'select-deployment' &&
                    <>
                        [SELECT DEPLOYMENT TYPE and FUNCTION]
                    </>
                }

                {(selectedDeployment !== 'select-deployment') &&
                    <>
                        {command}
                    </>
                }
            </div>
            <div className="btns-container">
                <p className={`copied-message ${commandCopied && "show"}`}>
                    Command copied to clipboard.
                </p>
                <CopyBtn
                    selectedAction={selectedAction}
                    copyCommand={copyCommand}
                />
            </div>
        </div>
    )
}
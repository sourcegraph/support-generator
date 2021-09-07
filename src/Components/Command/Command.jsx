// ANCHOR External Modules
import { useState, useEffect } from 'react'

// ANCHOR CSS
import './Command.css';

export default function Command({
    selectedDeployment,
    command,
}) {
    const [copy, setCopy] = useState("Copy")

    useEffect(() => {
        setCopy("Copy");
    }, [command, selectedDeployment])

    const copyCommand = () => {
        navigator.clipboard.writeText(command);
        setCopy("Copied!");
    }

    return (
        <div className="command-container">
            <div className="command-input-container">
                <textarea
                    className="command"
                    type="text"
                    defaultValue={selectedDeployment === "select-deployment" ? "[SELECT DEPLOYMENT TYPE]" : command}
                />
            </div>

            <div className="btn-container">
                <button
                    className="copy-button"
                    onClick={copyCommand}
                    disabled={selectedDeployment === "select-deployment" ? true : false}
                >
                    {copy}
                </button>
            </div>


        </div>

    )
}


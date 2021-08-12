import './Command.css';

export default function Command({
    selectedDeployment,
    command,
}) {
    const copyCommand = () => {
        navigator.clipboard.writeText(command);
    }

    return (
        <div className="command-container">
            <div className="command">
                {selectedDeployment === "select-deployment" ? (
                    <input 
                        className="command"
                        type="text"
                        placeholder="[SELECT DEPLOYMENT TYPE]"
                    />
                ) : (
                    <input 
                        className="command"
                        type="text"
                        defaultValue={command}
                    />
                )}
            </div>
            {selectedDeployment === "select-deployment" ? (
                <button 
                className="copy-button"
                onClick={copyCommand}
                disabled
            >
                Copy
            </button>
            ) : (
                <button 
                className="copy-button"
                onClick={copyCommand}
            >
                Copy
            </button>
            )}
            
        </div>
        
    )
}


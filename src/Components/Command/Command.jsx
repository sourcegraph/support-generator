// ANCHOR CSS
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
            <div className="command-input-container">
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

            <div className="btn-container">
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
            
            
        </div>
        
    )
}


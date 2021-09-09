import './CopyBtn.css';

export default function CopyBtn({ selectedDeployment, copyCommand }) {
    return (
        <>
            {selectedDeployment === "select-deployment" ? (
                <button
                    className="copy-button"
                    onClick={copyCommand}
                    disabled
                >
                    Copy Command
                </button>
            ) : (
                <button
                    className="copy-button"
                    onClick={copyCommand}
                >
                    Copy Command
                </button>
            )}
        </>
    )
}
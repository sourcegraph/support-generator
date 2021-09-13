// ANCHOR css
import './CopyBtn.css';

export default function CopyBtn({ selectedAction, copyCommand }) {
    return (
        <>
            {selectedAction === "Function" ? (
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
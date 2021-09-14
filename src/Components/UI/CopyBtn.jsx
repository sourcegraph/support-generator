// ANCHOR css
import './CopyBtn.css';

export default function CopyBtn({ selectedAction, copyCommand }) {
    return (
        <>
            {selectedAction === "Function" ? (
                <button
                    className="btn"
                    onClick={copyCommand}
                    disabled
                >
                    Copy Command
                </button>
            ) : (
                <button
                    className="btn"
                    onClick={copyCommand}
                >
                    Copy Command
                </button>
            )}
        </>
    )
}
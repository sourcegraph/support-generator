// ANCHOR css
import './CopyBtn.css';

export default function CopyBtn({ selectedAction, copyCommand, mode }) {
    return (
        <>
            {selectedAction === "Function" ? (
                <button
                    className={`btn ${mode === "dark" ? "dark" : "light"}`}
                    onClick={copyCommand}
                    disabled
                >
                    Copy Command
                </button>
            ) : (
                <button
                    className={`btn ${mode === "dark" ? "dark" : "light"}`}
                    onClick={copyCommand}
                >
                    Copy Command
                </button>
            )}
        </>
    )
}
// import "./CopyURLBtn.css"

export default function CopyURLBtn({ selectedAction, mode, copyURL }) {
    return (
        <>
            {selectedAction === "Function" ? (
                <button
                    className={`btn ${mode === "dark" ? "dark" : "light"}`}
                    onClick={copyURL}
                    disabled
                >
                    Copy as URL
                </button>
            ) : (
                <button
                    className={`btn ${mode === "dark" ? "dark" : "light"}`}
                    onClick={copyURL}
                >
                    Copy as URL
                </button>
            )}
        </>
    )
}
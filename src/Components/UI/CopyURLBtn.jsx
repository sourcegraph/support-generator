// import "./CopyURLBtn.css"

export default function CopyURLBtn({ selectedAction, mode, copyUrl }) {
    return (
        <>
            {selectedAction === "Function" ? (
                <button
                    className={`btn w-margin ${mode === "dark" ? "dark" : "light"}`}
                    onClick={copyUrl}
                    disabled
                >
                    Copy as URL
                </button>
            ) : (
                <button
                    className={`btn w-margin ${mode === "dark" ? "dark" : "light"}`}
                    onClick={copyUrl}
                >
                    Copy as URL
                </button>
            )}
        </>
    )
}
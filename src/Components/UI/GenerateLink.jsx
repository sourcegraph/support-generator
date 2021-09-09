// ANCHOR css
import './GenerateLink.css';




export default function GenerateLink({
    deployment,
    action,
    namespace,
    option,
    setGeneratedURI
}) {
    const generateURL = () => {
        const BASE_URL = (window.location.href).split("?")[0];

        const DEPLOYMENT_PARAM = deployment ? `?deployment=${encodeURIComponent(deployment)}` : "";
        const ACTION_PARAM = action ? `&function=${encodeURIComponent(action)}` : "";
        const NAMESPACE_PARAM = namespace ? `&namespace=${namespace}` : "";
        const OPTION_PARAM = option ? `&option=${option}` : "";

        const QUERY_STRING = DEPLOYMENT_PARAM
            + ACTION_PARAM
            + NAMESPACE_PARAM
            + OPTION_PARAM;

        setGeneratedURI(`${BASE_URL}${QUERY_STRING}`);
    }

    return (
        <>
            {action === "Function" ? (
                <button
                    className="generate-btn"
                    onClick={generateURL}
                    disabled
                >
                    Generate URL for re-use
                </button>
            ) : (
                <button
                    className="generate-btn"
                    onClick={generateURL}
                >
                    Generate URL for re-use
                </button>
            )}
        </>
    )
}
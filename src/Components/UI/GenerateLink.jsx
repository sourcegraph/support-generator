// ANCHOR css
import { useEffect } from 'react';
import './GenerateLink.css';




export default function GenerateLink({
    deployment,
    action,
    namespace,
    option,
    generatedURI,
    setGeneratedURI
}) {
    console.log("generated URI: ", generatedURI);
    const generateURL = () => {
        const BASE_URL = (window.location.href).split("?")[0];

        if (generatedURI.length !== 0) {
            setGeneratedURI("");
            window.location.href = BASE_URL
            return;
        }

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

    useEffect(() => {

    }, [generatedURI])

    return (
        <>
            {action === "Function" ? (
                <button
                    className="generate-btn"
                    onClick={generateURL}
                    disabled
                >
                    {generatedURI !== "" ? (
                        <>Clear Command</>
                    ) : (
                        <>Generate URL for re-use</>
                    )}

                </button>
            ) : (
                <button
                    className="generate-btn"
                    onClick={generateURL}
                >
                    {generatedURI !== "" ? (
                        <>Clear Command</>
                    ) : (
                        <>Generate URL for re-use</>
                    )}
                </button>
            )}
        </>
    )
}
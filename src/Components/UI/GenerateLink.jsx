
import './GenerateLink.css';

export default function GenerateLink({
    deployment,
    action,
    namespace,
    option,
    setGeneratedURI
}) {
    const generateURL = () => {
        let depURI = encodeURIComponent(deployment)
        let actURI = encodeURIComponent(action)
        let url;

        if (!namespace && !option) {
            url = `/${depURI}/${actURI}/`
        } else if (namespace && !option) {
            url = `/${depURI}/${actURI}/${namespace}/`
        } else if (namespace && option) {
            url = `/${depURI}/${actURI}/${namespace}/${option}`
        } else if (!namespace && option) {
            url = `/${depURI}/${actURI}/none/${option}`
        }

        setGeneratedURI(url);
    }

    return (
        <div className="generate-btn-container">
            {action === "Function" ? (
                <button
                    className="generate-btn"
                    onClick={generateURL}
                    disabled
                >
                    Generate URI
                </button>
            ) : (
                <button
                    className="generate-btn"
                    onClick={generateURL}
                >
                    Generate URL
                </button>
            )}

        </div>
    )
}
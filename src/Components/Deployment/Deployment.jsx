// ANCHOR CSS
import './Deployment.css';

export default function Deployment({
    selectedDeployment,
    setSelectedDeployment,
    setSelectedAction,
    hasNamespace,
    setHasNamespace,
    namespace,
    setNamespace,
    setOption,
    setGeneratedURI,
    mode
}) {
    return (
        <div className="deployment-container">

            <div className="deployment-type">
                <h4 className={`section ${mode === "dark" ? "dark" : "light"}`}>Select deployment</h4>
                <select
                    onChange={(e) => {
                        setSelectedDeployment(e.target.value)
                        setNamespace("")
                        setHasNamespace(false)
                        setSelectedAction("Function")
                        setOption("");
                        setGeneratedURI("")
                    }}
                    value={selectedDeployment}
                    className={`dropdown-menu ${mode === "dark" ? "dark" : "light"}`}
                >
                    <option value="select-deployment">Select Your Deployment Type...</option>
                    <option value="Docker">Docker</option>
                    <option value="Docker Compose">Docker Compose</option>
                    <option value="Kubernetes">Kubernetes</option>
                </select>
            </div>

            {selectedDeployment === "Kubernetes" &&
                <div>
                    <div className="namespace-check">
                        {hasNamespace ? (
                            <input
                                type="checkbox"
                                value={hasNamespace}
                                className={`ns-check ${mode === "dark" && "dark"}`}
                                onChange={() => setHasNamespace(!hasNamespace)}
                                checked
                            />
                        ) : (
                            <input
                                type="checkbox"
                                value={hasNamespace}
                                className={`ns-check ${mode === "dark" && "dark"}`}
                                onChange={() => setHasNamespace(!hasNamespace)}
                            />
                        )}

                        <label className={`namespace-label ${mode === "dark" ? "dark" : "light"}`} name="namespace">I am using a namespace.</label>
                    </div>

                    {hasNamespace &&
                        <div className="namespace-input">
                            <input
                                type="text"
                                placeholder="$NAMESPACE"
                                value={namespace}
                                onChange={(e) => setNamespace(e.target.value)}
                                className={`text-input ${mode === "dark" ? "dark" : "light"}`}
                            />
                        </div>
                    }
                </div>
            }
        </div>
    )
}
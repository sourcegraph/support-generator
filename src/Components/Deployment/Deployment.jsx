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
    setGeneratedURI
}) {
    return (
        <div className="deployment-container">

            <div className="deployment-type">
                <h4 className="section">Select deployment:</h4>
                <select
                    onChange={(e) => {
                        setSelectedDeployment(e.target.value)
                        setNamespace("")
                        setHasNamespace(false)
                        setSelectedAction("Function")
                        setOption("");
                        setGeneratedURI("")
                    }}
                    defaultValue={selectedDeployment}
                    value={selectedDeployment}
                    className="dropdown-menu"
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
                                onChange={() => setHasNamespace(!hasNamespace)}
                                checked
                            />
                        ) : (
                            <input
                                type="checkbox"
                                value={hasNamespace}
                                onChange={() => setHasNamespace(!hasNamespace)}
                            />
                        )}

                        <label className="namespace-label" name="namespace">I am using a namespace.</label>
                    </div>

                    {hasNamespace &&
                        <div className="namespace-input">
                            <input
                                type="text"
                                placeholder="$NAMESPACE"
                                value={namespace}
                                onChange={(e) => setNamespace(e.target.value)}
                                className="text-input"
                            />
                        </div>
                    }
                </div>
            }
        </div>
    )
}
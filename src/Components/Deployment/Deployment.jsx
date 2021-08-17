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
}) {
    return (
        <div className="deployment-container">
            <h3 className="section">Select your deployment type:</h3>
            <div className="deployment-type">
                <select 
                    onChange={(e) => {
                        setSelectedDeployment(e.target.value)
                        setNamespace("")
                        setHasNamespace(false)
                        setSelectedAction("Function")
                    }} 
                    defaultValue={selectedDeployment}
                    value={selectedDeployment}
                    className="dropdown-menu"
                >
                    <option value="select-deployment">Select Deployment Type...</option>
                    <option value="Docker">Docker</option>
                    <option value="Docker Compose">Docker Compose</option>
                    <option value="Kubernetes">Kubernetes</option>
                </select>
            </div>
            
            {selectedDeployment === "Kubernetes" && 
                <div>
                    <div className="namespace-check">
                        <input 
                            type="checkbox" 
                            value={hasNamespace}
                            onChange={() => setHasNamespace(!hasNamespace)}
                        ></input>  
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
                            ></input>
                        </div>
                    }
                </div>
            } 
        </div>
    )
}
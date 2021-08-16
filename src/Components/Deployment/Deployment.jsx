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
            <div className="deployment-type">
                <select 
                    className="deployment-dropdown"
                    onChange={(e) => {
                        setSelectedDeployment(e.target.value)
                        setNamespace("")
                        setHasNamespace(false)
                        setSelectedAction("Function")
                    }} 
                    defaultValue={selectedDeployment}
                    value={selectedDeployment}
                >
                    <option className="deployment-options" value="select-deployment">Select...</option>
                    <option className="deployment-options" value="Docker">Docker</option>
                    <option className="deployment-options" value="Docker Compose">Docker Compose</option>
                    <option className="deployment-options" value="Kubernetes">Kubernetes</option>
                </select>
            </div>
            
            {selectedDeployment === "Kubernetes" && 
                <>
                    <div className="namespace-check">
                        <input 
                            type="checkbox" 
                            value={hasNamespace}
                            onChange={() => setHasNamespace(!hasNamespace)}
                        />  
                        <label className="namespace-label" name="namespace">I am using a namespace</label>
                    </div>
                    <div className="namespace-input">
                        {hasNamespace &&
                            <div>
                                <input 
                                    type="text"
                                    placeholder="$POD_NAME"
                                    value={namespace}
                                    onChange={(e) => setNamespace(e.target.value)}
                                ></input>
                            </div>
                        }
                    </div>
                </>
            } 
        </div>
    )
}
import './Deployment.css';

export default function Deployment({
    selectedDeployment, 
    setSelectedDeployment,
    setSelectedAction,
    hasNamespace,
    setHasNamespace, 
    namespace, 
    setNamespace,
    setCommand,
}) {
    return (
        <div className="deployment-container">
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
                >
                    <option value="select-deployment">Select Deployment Type...</option>
                    <option value="Docker">Docker</option>
                    <option value="Docker Compose">Docker Compose</option>
                    <option value="Kubernetes">Kubernetes</option>
                </select>
            </div>
            
            {selectedDeployment === "Kubernetes" && 
                <div>
                    <input 
                        type="checkbox" 
                        value={hasNamespace}
                        onChange={() => setHasNamespace(!hasNamespace)}
                    ></input>  
                    <label name="namespace">Namespace?</label>
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
            } 
        </div>
    )
}
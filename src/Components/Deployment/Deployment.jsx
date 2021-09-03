import { useParams, useHistory } from 'react-router-dom';
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
    let {deployment} = useParams();
    
    // NOTE test to print out value of using the useParams() hook.
    // console.log("deployment = ", deployment)
    // console.log("namespaceParam = ", namespaceParam);


    let history = useHistory();
    if (deployment==="Docker" || deployment==="docker") setSelectedDeployment("Docker")
    if (deployment==="Docker Compose" || deployment==="dc") setSelectedDeployment("Docker Compose")
    if (deployment==="Kubernetes" || deployment==="k8s") setSelectedDeployment("Kubernetes")
    
    // FIXME namespaceParam is undefined so this never evaluates.
    // if (namespaceParam) {
    //     setHasNamespace(true);
    //     setNamespace(namespace);
    // }

    return (
        <div className="deployment-container">
            <div className="deployment-type">
                <h4 className="section">Select deployment:</h4>
                <select 
                    onChange={(e) => {
                        history.push(`/${e.target.value}`);
                        setSelectedDeployment(e.target.value)
                        setNamespace("")
                        setHasNamespace(false)
                        setSelectedAction("Get Logs")
                    }} 
                    defaultValue={selectedDeployment}
                    value={selectedDeployment}
                    className="dropdown-menu"
                >
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
                        />  
                        <label className="namespace-label" name="namespace">I am using a namespace.</label>
                    </div>
                    
                    {hasNamespace &&
                        <div className="namespace-input">
                            <input 
                                type="text"
                                placeholder="$NAMESPACE"
                                value={namespace}
                                onChange={(e) => {
                                    setNamespace(e.target.value)
                                    // console.log(namespace);
                                }
                                }
                                className="text-input"
                                autoFocus
                            ></input>
                        </div>
                    }
                </div>
            } 
        </div>
    )
}
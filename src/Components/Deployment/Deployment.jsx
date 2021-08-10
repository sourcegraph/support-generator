import React, {useState} from 'react';

import './Deployment.css';

export default function Deployment(props) {
    const [selectedDeployment, setSelectedDeployment] = useState('Select Deployment');
    const [hasNamespace, setHasNamespace] = useState(false);
    const [namespace, setNamespace] = useState("");
    
    return (
        <div className="deployment-container">
            {/* dropdown with options
                on update, based on the option selected, 
                the namespace checkbox should appear, 
                or not appear.

                Also... the Action dropdown should appear, once
                any option is selected.
            */}
            <div className="deployment-type">
                <select 
                    onChange={(e) => {
                        setSelectedDeployment(e.target.value)
                        setNamespace("")
                        setHasNamespace(false)
                    }} 
                    defaultValue={selectedDeployment}
                    value={selectedDeployment}
                >
                    <option value="select-deployment">Select Deployment</option>
                    <option value="single-docker">Single Docker</option>
                    <option value="docker-compose">Docker Compose</option>
                    <option value="kubernetes">Kubernetes</option>
                </select>
            </div>
            {selectedDeployment === "kubernetes" && 
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
                                placeholder="enter namespace"
                                value={namespace}
                                onChange={(e) => setNamespace(e.target.value)}
                            ></input>
                        </div>
                    }
                </div>
            } 
            {/* 
                Based on the state of namespace
                we show or don't show a text field to type the 
                name of the namespace
            */}
            
        </div>
    )
}
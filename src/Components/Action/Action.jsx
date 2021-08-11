import {useState} from 'react';

import Dropdown from "../UI/Dropdown"

import {commands} from '../../utils/commands';
import {getOptionValues} from '../../utils/helpers';

import './Action.css';

export default function Action({selectedDeployment}) {
    const [selectedAction, setSelectedAction] = useState("function");
    const dockerMap = commands["Docker"];
    const dockerComposeMap = commands["Docker Compose"];
    const kubernetesMap = commands["Kubernetes"];
    const dockerOptions = getOptionValues(dockerMap);
    const dockerComposeOptions = getOptionValues(dockerComposeMap);
    const kubernetesOptions = getOptionValues(kubernetesMap);

    return (
        <div className="actions-container">
            {selectedDeployment === "Docker" && 
                <Dropdown
                    onChange={(e) => setSelectedAction(e.target.value)} 
                    setSelectedAction={setSelectedAction}
                    defaultValue={selectedAction}
                    optionValues={dockerOptions} 
                />
            }

            {selectedDeployment === "Docker Compose" &&
                <Dropdown
                    onChange={(e) => setSelectedAction(e.target.value)} 
                    setSelectedAction={setSelectedAction}
                    defaultValue={selectedAction}
                    optionValues={dockerComposeOptions} 
                />
            }

            {selectedDeployment === "Kubernetes" &&
                <Dropdown
                    onChange={(e) => setSelectedAction(e.target.value)} 
                    setSelectedAction={setSelectedAction}
                    defaultValue={selectedAction}
                    optionValues={kubernetesOptions} 
                />
            }

        </div>
    )
}
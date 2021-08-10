import {useState} from 'react';

import Dropdown from "../UI/Dropdown"
import { 
    singleDockerOptions, 
    singleDockerTitles,
    dockerComposeOptions,
    dockerComposeTitles, 
    kubernetesOptions,
    kubernetesTitles 
} from '../../utils/options';

import './Action.css';

export default function Action({selectedDeployment}) {
    const [selectedAction, setSelectedAction] = useState("function");

    return (
        <div className="actions-container">
            {selectedDeployment === "single-docker" && 
                <Dropdown
                    onChange={(e) => setSelectedAction(e.target.value)} 
                    setSelectedAction={setSelectedAction}
                    defaultValue={selectedAction}
                    optionValues={singleDockerOptions} 
                    optionTitles={singleDockerTitles} 
                />
            }

            {selectedDeployment === "docker-compose" &&
                <Dropdown
                    onChange={(e) => setSelectedAction(e.target.value)} 
                    setSelectedAction={setSelectedAction}
                    defaultValue={selectedAction}
                    optionValues={dockerComposeOptions} 
                    optionTitles={dockerComposeTitles} 
                />
            }

            {selectedDeployment === "kubernetes" &&
                <Dropdown
                    onChange={(e) => setSelectedAction(e.target.value)} 
                    setSelectedAction={setSelectedAction}
                    defaultValue={selectedAction}
                    optionValues={kubernetesOptions} 
                    optionTitles={kubernetesTitles} 
                />
            }

        </div>
    )
}
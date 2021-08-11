import Dropdown from "../UI/Dropdown";

import {commands} from '../../utils/commands';
import {getOptionValues} from '../../utils/helpers';

import './Action.css';

export default function Action({
    selectedDeployment, 
    selectedAction, 
    setSelectedAction,
    option,
    setOption
}) {
    const dockerMap = commands["Docker"];
    const dockerComposeMap = commands["Docker Compose"];
    const kubernetesMap = commands["Kubernetes"];
    const dockerOptions = getOptionValues(dockerMap);
    const dockerComposeOptions = getOptionValues(dockerComposeMap);
    const kubernetesOptions = getOptionValues(kubernetesMap);
    console.log(dockerMap);

    return (
        <div className="actions-container">
            {selectedDeployment === "Docker" && 
                <>
                    <Dropdown
                        onChange={(e) => setSelectedAction(e.target.value)} 
                        setSelectedAction={setSelectedAction}
                        defaultValue={selectedAction}
                        optionValues={dockerOptions} 
                        map={dockerMap}
                    />
                    {dockerMap[selectedAction]["option"] &&
                        <div>
                            <input 
                                type="text"
                                placeholder={dockerMap[selectedAction]["option"]}
                                value={option}
                                onChange={(e) => setOption(e.target.value)}
                            />
                        </div> 
                    }
                </>
            }

            {selectedDeployment === "Docker Compose" &&
                <>
                    <Dropdown
                        onChange={(e) => setSelectedAction(e.target.value)} 
                        setSelectedAction={setSelectedAction}
                        defaultValue={selectedAction}
                        optionValues={dockerComposeOptions} 
                        map={dockerComposeMap}
                    />

                    {dockerComposeMap[selectedAction]["option"] &&
                        <div>
                            <input 
                                type="text"
                                placeholder={dockerComposeMap[selectedAction]["option"]}
                                value={option}
                                onChange={(e) => setOption(e.target.value)}
                            />
                        </div>
                    }
                </>
            }

            {selectedDeployment === "Kubernetes" &&
                <>
                    <Dropdown
                        onChange={(e) => setSelectedAction(e.target.value)} 
                        setSelectedAction={setSelectedAction}
                        defaultValue={selectedAction}
                        optionValues={kubernetesOptions} 
                        map={kubernetesMap}
                    />

                    {kubernetesMap[selectedAction]["option"] && 
                        <div>
                            <input
                                type="text"
                                placeholder={kubernetesMap[selectedAction]["option"]}
                                value={option}
                                onChange={(e) => setOption(e.target.value)}
                            />
                        </div>
                    }
                </>
            }

        </div>
    )
}
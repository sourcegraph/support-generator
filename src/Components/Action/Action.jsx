// ANCHOR Internal Modules
import Dropdown from "../UI/Dropdown";
import {commands} from '../../utils/commands';
import {getOptionValues} from '../../utils/helpers';

// CSS
import './Action.css';

export default function Action({
    selectedDeployment, 
    selectedAction, 
    setSelectedAction,
    option,
    setOption,
    setCommand,
    namespace,
    hasNamespace,
}) {
    const dockerMap = commands["Docker"];
    const dockerComposeMap = commands["Docker Compose"];
    const kubernetesMap = commands["Kubernetes"];
    const dockerOptions = getOptionValues(dockerMap);
    const dockerComposeOptions = getOptionValues(dockerComposeMap);
    const kubernetesOptions = getOptionValues(kubernetesMap);

    return (
        <div className="actions-container">
            {selectedDeployment === "Docker" && 
                <>
                    <Dropdown
                        selectedAction={selectedAction}
                        defaultValue={selectedAction}
                        optionValues={dockerOptions} 
                        option={option}
                        setOption={setOption}
                        map={dockerMap}
                        setSelectedAction={setSelectedAction}
                        setCommand={setCommand}

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
                        selectedAction={selectedAction}
                        defaultValue={selectedAction}
                        optionValues={dockerComposeOptions} 
                        map={dockerComposeMap}
                        option={option}
                        setOption={setOption}
                        setSelectedAction={setSelectedAction}
                        setCommand={setCommand}
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
                        selectedAction={selectedAction}
                        defaultValue={selectedAction}
                        optionValues={kubernetesOptions} 
                        map={kubernetesMap}
                        option={option}
                        setOption={setOption}
                        setSelectedAction={setSelectedAction}
                        setCommand={setCommand}
                        hasNamespace={hasNamespace}
                        namespace={namespace}
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
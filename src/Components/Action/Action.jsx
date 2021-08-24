// ANCHOR Internal Modules
import Dropdown from "../UI/Dropdown";
import {commands} from '../../utils/commands';
import {getOptionValues} from '../../utils/helpers';

// ANCHOR CSS
import './Action.css';



export default function Action({
    selectedDeployment, 
    selectedAction, 
    setSelectedAction,
    option,
    setOption,
    command,
    setCommand,
    namespace,
    hasNamespace,
}) {
    const commandsMap = commands[selectedDeployment];
    const dockerOptions = getOptionValues(commandsMap);
    const dockerComposeOptions = getOptionValues(commandsMap);
    const kubernetesOptions = getOptionValues(commandsMap);

    return (
        <div className="actions-container">
            {/* Docker Action Menu */}
            {selectedDeployment === "Docker" && 
                <>
                    <Dropdown
                        selectedAction={selectedAction}
                        defaultValue={selectedAction}
                        optionValues={dockerOptions} 
                        option={option}
                        setOption={setOption}
                        map={commandsMap}
                        setSelectedAction={setSelectedAction}
                        command={setCommand}
                        setCommand={setCommand}

                    />
                    {commandsMap[selectedAction] &&
                        <div className="action-option">
                            <input 
                                type="text"
                                placeholder={commandsMap[selectedAction]["option"]}
                                value={option}
                                onChange={(e) => setOption(e.target.value)}
                                className="text-input"
                            />
                        </div> 
                    }
                </>
            }

            {/* Docker Compose Action Menu */}
            {selectedDeployment === "Docker Compose" &&
                <>
                    <Dropdown
                        selectedAction={selectedAction}
                        defaultValue={selectedAction}
                        optionValues={dockerComposeOptions} 
                        map={commandsMap}
                        option={option}
                        setOption={setOption}
                        setSelectedAction={setSelectedAction}
                        command={setCommand}
                        setCommand={setCommand}
                    />

                    {commandsMap[selectedAction] &&
                        <div className="action-option">
                            <input 
                                type="text"
                                placeholder={commandsMap[selectedAction]["option"]}
                                value={option}
                                onChange={(e) => setOption(e.target.value)}
                                className="text-input"
                            />
                        </div>
                    }
                </>
            }

            {/* Kubernetes Menu */}
            {selectedDeployment === "Kubernetes" &&
                <>
                    <Dropdown
                        selectedAction={selectedAction}
                        defaultValue={selectedAction}
                        optionValues={kubernetesOptions} 
                        map={commandsMap}
                        option={option}
                        setOption={setOption}
                        setSelectedAction={setSelectedAction}
                        setCommand={setCommand}
                        command={setCommand}
                        hasNamespace={hasNamespace}
                        namespace={namespace}
                    />

                    {commandsMap[selectedAction] && 
                        <div className="action-option">
                            <input
                                type="text"
                                placeholder={commandsMap[selectedAction]["option"]}
                                value={option}
                                onChange={(e) => setOption(e.target.value)}
                                className="text-input"
                            />
                        </div>
                    }
                </>
            }
        </div>
    )
}
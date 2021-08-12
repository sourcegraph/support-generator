// ANCHOR Internal Modules
import Dropdown from "../UI/Dropdown";
import { commands } from "../../utils/commands";
import { getOptionValues } from "../../utils/helpers";

// CSS
import "./Action.css";

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
    const deploymentMap = commands[selectedDeployment];
    const listOptions = getOptionValues(deploymentMap);
    console.log(deploymentMap)

    return (
        <div className="actions-container">
        {
            {
            "Docker": <Dropdown
                selectedAction={selectedAction}
                defaultValue={selectedAction}
                optionValues={listOptions}
                option={option}
                setOption={setOption}
                map={deploymentMap}
                setSelectedAction={setSelectedAction}
                command={setCommand}
                setCommand={setCommand}
            />,
            "Docker Compose": <Dropdown
                selectedAction={selectedAction}
                defaultValue={selectedAction}
                optionValues={listOptions}
                map={deploymentMap}
                option={option}
                setOption={setOption}
                setSelectedAction={setSelectedAction}
                command={setCommand}
                setCommand={setCommand}
            />,
            "Kubernetes": <Dropdown
                selectedAction={selectedAction}
                defaultValue={selectedAction}
                optionValues={listOptions}
                map={deploymentMap}
                option={option}
                setOption={setOption}
                setSelectedAction={setSelectedAction}
                setCommand={setCommand}
                command={setCommand}
                hasNamespace={hasNamespace}
                namespace={namespace}
            />,
            }[selectedDeployment]
        }
        {deploymentMap && deploymentMap[selectedAction] && deploymentMap[selectedAction]["option"] && (
            <div>
                <input
                    type="text"
                    placeholder={deploymentMap[selectedAction]["option"]}
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                />
            </div>
            
        )}
        </div>
    );
}


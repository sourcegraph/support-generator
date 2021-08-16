// ANCHOR Internal Modules
import Dropdown from "../UI/Dropdown";
import { commands } from "../../utils/commands";
import { getOptionValues } from "../../utils/helpers";

// ANCHOR CSS
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
    const deploymentMap = commands[selectedDeployment];
    const listOptions = getOptionValues(deploymentMap);

    return (
        <div className="actions-container">
        { selectedDeployment &&  <Dropdown
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
            />
        }
        {deploymentMap && deploymentMap[selectedAction] && deploymentMap[selectedAction]["option"] && (
            <div className="action-input">
                <input
                    type="text"
                    placeholder={deploymentMap[selectedAction]["option"]}
                    value={option || ""}
                    onChange={(e) => setOption(e.target.value)}
                />
            </div>
            
        )}
        </div>
    );
}


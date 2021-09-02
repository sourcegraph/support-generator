import { useParams } from 'react-router';
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
    
    const mapCommands = commands[selectedDeployment];
    const listActions = getOptionValues(mapCommands);
    let {deployment, action, podParam} = useParams();
    !action ? action = selectedAction : action = decodeURIComponent(action);
    if(podParam) setOption(podParam)

    return (
        <div className="actions-container">
            {/* Action Menu */}
            <>
                <Dropdown
                    selectedAction={action}
                    defaultValue={action}
                    optionValues={listActions} 
                    deployment={deployment}
                    map={mapCommands}
                    option={option}
                    setOption={setOption}
                    setSelectedAction={setSelectedAction}
                    setCommand={setCommand}
                    command={setCommand}
                    hasNamespace={hasNamespace}
                    namespace={namespace}
                />

                {mapCommands[selectedAction] && mapCommands[selectedAction]["option"] &&
                    <div className="action-option">
                        <input
                            type="text"
                            placeholder={mapCommands[selectedAction]["option"]}
                            value={option}
                            onChange={(e) => setOption(e.target.value)}
                            className="text-input"
                            autoFocus
                        />
                    </div>
                }
            </>          
        </div>
    );
}


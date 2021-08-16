// ANCHOR External Modules
import { useEffect } from 'react';

// ANCHOR Internal Modules
import DropdownOption from './DropdownOption';

// ANCHOR CSS
import './Dropdown.css';

export default function Dropdown({
    defaultValue, 
    map,
    optionValues, 
    option,
    setOption,
    selectedDeployment,
    setSelectedAction,
    selectedAction,
    command,
    setCommand,
    hasNamespace,
    namespace
}) {
    function generateOptions() {
        return optionValues.map((val, i) => {
            return (
                <DropdownOption 
                    key={`option-${i}`}
                    value={val}
                    opt={map[val]["option"] || null}
                />
            )
        })
    }

    useEffect(() => {
        // pre-set option
        if (map && selectedAction && map[selectedAction]["option"]) {
            if(!option) setOption(map[selectedAction]["option"]);
            const command1 = map[selectedAction]["command"];
            const command2 = map[selectedAction]["command2"]
                ? map[selectedAction]["command2"]
                : null;

            if (hasNamespace) {
                setCommand(`${command1} ${option} -n ${namespace} ${command2 ? command2 : ""}`);
            } else {
                setCommand(`${command1} ${option} ${command2 ? command2 : ""}`);
            }
        }
    }, [
        setOption,
            setCommand, 
            selectedAction, 
            map, 
            namespace, 
            hasNamespace, 
            option, 
            command
        ]
    );

    return (
        <div>
            <select 
                className="action-dropdown"
                onChange={(e) => {
                    setSelectedAction(e.target.value);
                    setOption("")
                }} 
                defaultValue={defaultValue}
                value={selectedDeployment}
            >
                {optionValues && generateOptions()}
            </select>
        </div>
    )
}
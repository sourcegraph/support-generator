// ANCHOR External Modules
import { useEffect } from 'react';

// ANCHOR Internal Modules
import DropdownOption from './DropdownOption';

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
        const command1 = map[selectedAction]["command"];
        const command2 = map[selectedAction]["command2"]
            ? map[selectedAction]["command2"]
            : null;

        if (hasNamespace && option === "") {
            setCommand(`${command1} -n ${namespace} ${command2 ? command2 : ""}`);
        } else if (hasNamespace && option !== "") {
            setCommand(`${command1}${option} -n ${namespace} ${command2 ? command2 : ""}`);
        } else if (!hasNamespace && option !== "") {
            setCommand(`${command1}${option} ${command2 ? command2 : ""}`);
        } else {
            setCommand(`${command1}${command2 ? command2 : ""}`);
        }
    }, [
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
        <div className="deployment-type">
            <select 
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
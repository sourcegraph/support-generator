import { useEffect } from 'react';
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

        if (hasNamespace) {
            setCommand(`${command1} -n ${namespace}`)
        } else if (hasNamespace && option !== "") {
            setCommand(`${command1} ${option} -n ${namespace}`);
        } else if (!hasNamespace && option !== "") {
            setCommand(`${command1} ${option}`)
        } else {
            setCommand(command1)
        }
    }, [setCommand, selectedAction, map, namespace, hasNamespace, option])

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
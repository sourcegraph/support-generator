// ANCHOR External Modules
import { useEffect } from 'react';
import { useHistory } from 'react-router';

// ANCHOR Internal Modules
import DropdownOption from './DropdownOption';

export default function Dropdown({
    defaultValue, 
    map,
    optionValues, 
    option,
    setOption,
    deployment,
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

    let history = useHistory();

    useEffect(() => {
        if(map[selectedAction]){
            !option && setOption(map[selectedAction]["option"]);
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
        <div className="deployment-type">
            <h4 className="section">Select action to take:</h4>
            <select 
                onChange={(e) => {
                    let encoded = encodeURIComponent(e.target.value)
                    setSelectedAction(e.target.value);
                    history.push(`/${deployment}/${encoded}`);
                    setOption("");
                }} 
                defaultValue={defaultValue}
                value={selectedDeployment}
                className="dropdown-menu"
            >
                {optionValues && generateOptions()}
            </select>
        </div>
    )
}
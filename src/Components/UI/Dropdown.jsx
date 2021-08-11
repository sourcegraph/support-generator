import DropdownOption from './DropdownOption';

export default function Dropdown({
    onChange,
    defaultValue, 
    map,
    optionValues, 
    selectedDeployment
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

    return (
        <div className="deployment-type">
            <select 
                onChange={onChange} 
                defaultValue={defaultValue}
                value={selectedDeployment}
            >
                {optionValues && generateOptions()}
            </select>
        </div>
    )
}
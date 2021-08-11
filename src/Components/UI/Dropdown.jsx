export default function Dropdown({
    onChange,
    defaultValue, 
    optionValues, 
    selectedDeployment
}) {
    function generateOptions() {
        return optionValues.map((value, i) => {
            return (
                <option 
                    key={`option-${i}`}
                    value={value}
                >
                    {value}
                </option>
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
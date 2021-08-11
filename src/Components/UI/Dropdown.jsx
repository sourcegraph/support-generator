export default function Dropdown({
    onChange,
    defaultValue, 
    optionValues, 
    optionTitles, 
    selectedDeployment
}) {
    function generateOptions() {
        return optionValues.map((value, i) => {
            return (
                <option 
                    key={`option-${i}`}
                    value={value}
                >
                    {optionTitles[i]}
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
                {optionTitles && generateOptions()}
            </select>
        </div>
    )
}
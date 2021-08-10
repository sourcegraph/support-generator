export default function Dropdown({
    onChange, 
    defaultValue, 
    value, 
    optionValues, 
    optionTitles, 
    selectedDeployment
}) {
    function generateOptions() {
        return optionValues.map((i) => {
            return (
                <option 
                    key={`option${i}`}
                    value={optionValues[i]}
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
                defaultValue={selectedDeployment}
                value={selectedDeployment}
            >
                {optionTitles && generateOptions()}
            </select>
        </div>
    )
}
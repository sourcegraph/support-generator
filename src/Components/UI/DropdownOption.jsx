export default function DropdownOption({value, opt}) {
    return (
        <option 
            value={value}
            opt={opt}
        >
            {value}
        </option>
    )
}
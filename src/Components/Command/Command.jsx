import './Command.css';

export default function Command({
    selectedDeployment,
    selectedAction,
    command,
    setCommand,
    namespace,
    option
}) {
    return (
        <div className="command">
            {command || "Choose deployment and action"}
        </div>
    )
}
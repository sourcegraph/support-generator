import { useEffect } from 'react';
import { commands } from '../../utils/commands';
import './Command.css';

export default function Command({
    selectedDeployment,
    selectedAction,
    command,
    setCommand,
    namespace,
    option
}) {
    useEffect(() => {
        console.log("reloaded")
    }, [selectedDeployment, selectedAction, namespace, option])

    return (
        <div className="command">
            {command}
        </div>
    )
}
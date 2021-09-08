// import { useParams } from 'react-router';
// ANCHOR Internal Modules
import Dropdown from "../UI/Dropdown";
import { commands } from "../../utils/commands";
import { getOptionValues } from "../../utils/helpers";

// CSS
import "./Action.css";



export default function Action({
    selectedDeployment,
    selectedAction,
    setSelectedAction,
    option,
    setOption,
    setCommand,
    namespace,
    hasNamespace,
}) {

    const mapCommands = commands[selectedDeployment];
    const listActions = getOptionValues(mapCommands);

    // NOTE: B i tried to figure out what you were doing here but it seems to be 
    // breaking all the re-rendering that needs to happen.

    // let { deployment, action, podParam } = useParams();


    // !action ? action = selectedAction : action = decodeURIComponent(action);
    // if (podParam) setOption(podParam)

    return (
        <div className="actions-container">
            {/* Action Menu */}
            <>
                <Dropdown
                    // selectedAction={action}
                    selectedAction={selectedAction}
                    // defaultValue={action}
                    defaultValue={selectedAction}
                    optionValues={listActions}
                    // deployment={deployment}
                    deployment={selectedDeployment}
                    map={mapCommands}
                    option={option}
                    setOption={setOption}
                    setSelectedAction={setSelectedAction}
                    setCommand={setCommand}
                    command={setCommand}
                    hasNamespace={hasNamespace}
                    namespace={namespace}
                />

                {(mapCommands[selectedAction] && mapCommands[selectedAction]["option"]) &&
                    <div className="action-option">
                        {/*
                            NOTE: 
                            Including this note because i didn't know autofocus was basically not useable in React. Had to look up a bunch of stuff
                            while debugging. Please delete once read/understood. Also... delete the commented out auto focus on line 72 and 73.
                            
                            I commented out the autofocus attribute. According to w3schools (https://w3schools.com/tags/att_input_autofocus.asp),
                            the autofocus attribute automatically gives focus to the last input element of the dom, which in this case, is the "option"
                            input below the Action dropdown. This was causing the input to be refocused everytime the page re-renders. 
                            
                            This is why whenever you changed the namespace input, it would immediately refocus to the option input. This happened
                            because each time the input for the namespace was changed it triggered a re-render, thereby autofocusing on the last
                            input element on the page. 
                            
                            -Jason
                        */}
                        <input
                            type="text"
                            placeholder={mapCommands[selectedAction]["option"]}
                            value={option}
                            onChange={(e) => setOption(e.target.value)}
                            className="text-input"
                        // Delete this and the next line once the comment above is understood.
                        // autoFocus
                        />
                    </div>
                }
            </>
        </div>
    );
}


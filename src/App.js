// ANCHOR External Modules
import {useState} from 'react'

// ANCHOR Internal Modules
import Deployment from './Components/Deployment/Deployment';
import Action from './Components/Action/Action';
import Command from './Components/Command/Command';

// ANCHOR CSS
import './App.css';



function App() {
	const [selectedDeployment, setSelectedDeployment] = useState("select-deployment");
	const [selectedAction, setSelectedAction] = useState("Function")
	const [hasNamespace, setHasNamespace] = useState(false);
	const [namespace, setNamespace] = useState("");
	const [option, setOption] = useState("");
	const [command, setCommand] = useState("");

	return (
		<div className="App">
			<h1>Command Line Generator</h1>

			<div className="actions">
				
				{/* USER selects their deployment */}
				<Deployment
					selectedDeployment={selectedDeployment}
					setSelectedDeployment={setSelectedDeployment}
					setSelectedAction={setSelectedAction}
					hasNamespace={hasNamespace}
					setHasNamespace={setHasNamespace}
					namespace={namespace}
					setNamespace={setNamespace}
					setCommand={setCommand}
				/>

				{/* USER selects the action they want to take */}
				<Action
					selectedDeployment={selectedDeployment}
					selectedAction={selectedAction}
					setSelectedAction={setSelectedAction}
					option={option}
					setOption={setOption}
					command={command}
					setCommand={setCommand}
					hasNamespace={hasNamespace}
					namespace={namespace}
				/>
			</div>

			{/* Command generated from the first two options. */}
			<div>
				<Command 
					selectedDeployment={selectedDeployment}
					selectedAction={selectedAction}
					command={command}
					setCommand={setCommand}
					namespace={namespace}
					option={option}
				/>
			</div>
		</div>
	);
}

export default App;

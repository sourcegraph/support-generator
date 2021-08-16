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
			<div className="title">
				<img 
					className="logo" 
					alt="sourcegraph-logo" 
					src="./images/Sourcegraph_Logo_FullColor_light.png" 
				/>
				<h3 className="sub-title">Command Line Generator</h3>
			</div>
			
			

			<div className="actions">
				
				{/* USER selects their deployment */}
				<h4 className="dropdown-label">Select your deployment type:</h4>
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
				<h4 className="dropdown-label">Select the action you want to take:</h4>
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

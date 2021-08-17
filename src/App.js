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
			<img 
				alt="sourcegraph-logo" 
				src="images/Sourcegraph_Logo_FullColor_light.png" 
				className="logo"
			/>
			<h2 className="subtitle">Command Line Generator</h2>

			<div className="actions">
				
				{/* USER selects their deployment */}
				<h3 className="section">Select your deployment type:</h3>
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
				<h3 className="section">Select the action you want to take</h3>
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

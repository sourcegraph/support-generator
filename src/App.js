import {useState} from 'react'
import Deployment from './Components/Deployment/Deployment';
import Action from './Components/Action/Action';
import Command from './Components/Command/Command';

import './App.css';

function App() {
	const [selectedDeployment, setSelectedDeployment] = useState("Select Deployment");
	const [selectedAction, setSelectedAction] = useState("Function")
	const [hasNamespace, setHasNamespace] = useState(false);
	const [namespace, setNamespace] = useState("");

	return (
		<div className="App">
			<h1>Command Line Generator</h1>
			<div className="actions">
				<Deployment
					selectedDeployment={selectedDeployment}
					setSelectedDeployment={setSelectedDeployment}
					setSelectedAction={setSelectedAction}
					hasNamespace={hasNamespace}
					setHasNamespace={setHasNamespace}
					namespace={namespace}
					setNamespace={setNamespace}
				/>
				<Action
					selectedDeployment={selectedDeployment}
					selectedAction={selectedAction}
					setSelectedAction={setSelectedAction}
				/>
			</div>
			<div>
				<Command />
			</div>
		</div>
	);
}

export default App;

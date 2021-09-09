// ANCHOR External Modules
import { useState } from 'react'

// ANCHOR Internal Modules
import Deployment from './Components/Deployment/Deployment';
import Action from './Components/Action/Action';
import Command from './Components/Command/Command';
import GeneratedURI from './Components/UI/GeneratedURI';

// ANCHOR CSS
import './App.css';
import Descriptions from './Components/Descriptions/Descriptions';



function App() {
	const queryParams = new URLSearchParams(window.location.search);

	const deployment = queryParams.get('deployment');
	const action = queryParams.get('function');
	const nSpace = queryParams.get('namespace');
	const opt = queryParams.get('option');

	const [selectedDeployment, setSelectedDeployment] = useState(deployment || "select-deployment");
	const [selectedAction, setSelectedAction] = useState(action || "Function")
	const [namespace, setNamespace] = useState(nSpace || "");
	const [hasNamespace, setHasNamespace] = useState(nSpace ? true : false);
	const [option, setOption] = useState(opt || "");
	const [command, setCommand] = useState("");
	const [generatedURI, setGeneratedURI] = useState("");





	return (
		<div className="App">
			<img
				alt="sourcegraph-logo"
				src="https://github.com/sourcegraph/support-generator/blob/main/public/images/Sourcegraph_Logo_FullColor_light.png?raw=true"
				className="logo"
			/>
			<h2 className="subtitle">Command Line Generator</h2>

			<div className="container">
				<div className="actions">

					{/* USER selects their deployment */}
					<div className="deploy-container">
						<Deployment
							selectedDeployment={selectedDeployment}
							setSelectedDeployment={setSelectedDeployment}
							setSelectedAction={setSelectedAction}
							hasNamespace={hasNamespace}
							setHasNamespace={setHasNamespace}
							namespace={namespace}
							setNamespace={setNamespace}
							setCommand={setCommand}
							setOption={setOption}
							setGeneratedURI={setGeneratedURI}
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
							setGeneratedURI={setGeneratedURI}
						/>
					</div>

				</div>

				<div className="line-break">
				</div>

				<div className="descriptions-container">
					<Descriptions
						selectedDeployment={selectedDeployment}
					/>
				</div>
			</div>



			{/* Command generated from the first two options. */}
			<div>
				<Command
					selectedDeployment={selectedDeployment}
					selectedAction={selectedAction}
					command={command}
					namespace={namespace}
					option={option}
					setGeneratedURI={setGeneratedURI}
				/>
				<GeneratedURI
					generatedURI={generatedURI}
					setGeneratedURI={setGeneratedURI}
				/>
			</div>
		</div>
	);
}

export default App;

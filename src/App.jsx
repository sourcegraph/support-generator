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
	const [selectedDeployment, setSelectedDeployment] = useState("select-deployment");
	const [selectedAction, setSelectedAction] = useState("Function")
	const [hasNamespace, setHasNamespace] = useState(false);
	const [namespace, setNamespace] = useState("");
	const [option, setOption] = useState("");
	const [command, setCommand] = useState("");
	const [generatedURI, setGeneratedURI] = useState("");

	return (
		<div className="App">
			<img
				alt="sourcegraph-logo"
				src="images/Sourcegraph_Logo_FullColor_light.png"
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

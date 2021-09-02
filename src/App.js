// ANCHOR External Modules
import {useState} from 'react'

// ANCHOR Internal Modules
import Deployment from './Components/Deployment/Deployment';
import Action from './Components/Action/Action';
import Command from './Components/Command/Command';
import {
		BrowserRouter as Router,
		Route
 	} from "react-router-dom";
  

// ANCHOR CSS
import './App.css';
import Descriptions from './Components/Descriptions/Descriptions';



function App() {
	const [selectedDeployment, setSelectedDeployment] = useState("Docker");
	const [selectedAction, setSelectedAction] = useState("Get Logs")
	const [hasNamespace, setHasNamespace] = useState(false);
	const [namespace, setNamespace] = useState("");
	const [option, setOption] = useState("");
	const [command, setCommand] = useState("");

	return (
		<Router basename="/support-generator">
		<div className="App">
			<img 
				alt="sourcegraph-logo" 
				src="https://github.com/sourcegraph/support-generator/blob/main/public/images/Sourcegraph_Logo_FullColor_light.png?raw=true" 
				className="logo"
			/>
			<h2 className="subtitle">Command Generator</h2>

			<div className="container">
				<div className="actions">

					{/* USER selects their deployment */}
					<Route path="/:deployment?/:action?/:podParam?/:namespaceParam?" component={()=> (
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
					)} />
					
					
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
					setCommand={setCommand}
					namespace={namespace}
					option={option}
				/>
			</div>
		</div>
		</Router>
	);
}

export default App;

// ANCHOR External Modules
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

// ANCHOR Internal Modules
import modeState from './recoil/atoms';
import Deployment from './Components/Deployment/Deployment';
import Action from './Components/Action/Action';
import GeneratedURI from './Components/UI/GeneratedURI';

// ANCHOR CSS
import './App.css';
import Descriptions from './Components/Descriptions/Descriptions';
import Or from './Components/UI/Or';
import GeneratedCommand from './Components/Command/GeneratedCommand';



function App() {
	// determine user preference for dark or light mode.
	const [mode, setMode] = useRecoilState(modeState)

	// Use search params if present in URL
	const queryParams = new URLSearchParams(window.location.search);
	const deployment = queryParams.get('deployment');
	const action = queryParams.get('function');
	const nSpace = queryParams.get('namespace');
	const opt = queryParams.get('option');

	// States
	const [selectedDeployment, setSelectedDeployment] = useState(deployment || "select-deployment");
	const [selectedAction, setSelectedAction] = useState(action || "Function")
	const [namespace, setNamespace] = useState(nSpace || "");
	const [hasNamespace, setHasNamespace] = useState(nSpace ? true : false);
	const [option, setOption] = useState(opt || "");
	const [command, setCommand] = useState("");
	const [generatedURI, setGeneratedURI] = useState("");

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setMode('dark');
		}
	}, [mode, setMode])

	return (
		<div className="App">
			{/* DARK MODE TEST  (works.)*/}
			{/* {mode === "light" ? (<p>"hi light!"</p>) : (<p>"hi dark!"</p>)} */}
			<img
				alt="sourcegraph-logo"
				src="https://github.com/sourcegraph/support-generator/blob/main/public/images/Sourcegraph_Logo_FullColor_light.png?raw=true"
				className="logo"
			/>
			<h2 className="subtitle">Command Line Generator</h2>

			<div className="container">
				{/* <div className="actions"> */}

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

				{/* </div> */}

				<div className="line-break">
				</div>

				<div className="descriptions-container">
					{/* <Descriptions
						selectedDeployment={selectedDeployment}
					/> */}
					<Descriptions
						selectedDeployment={selectedDeployment}
					/>
				</div>
			</div>



			{/* Command generated from the first two options. */}
			<div className="user-options-container">
				<GeneratedCommand
					selectedDeployment={selectedDeployment}
					selectedAction={selectedAction}
					command={command}
					namespace={namespace}
					option={option}
					setGeneratedURI={setGeneratedURI}
				/>

				{/* divider */}
				<Or />

				{/* URI Generated so that user can revisit with the same options selected */}
				<GeneratedURI
					selectedDeployment={selectedDeployment}
					selectedAction={selectedAction}
					namespace={namespace}
					option={option}
					generatedURI={generatedURI}
					setGeneratedURI={setGeneratedURI}
				/>
			</div>
		</div>
	);
}

export default App;

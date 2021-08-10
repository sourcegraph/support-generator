import {useState} from 'react'
import './App.css';
import Deployment from './Components/Deployment/Deployment';
import Action from './Components/Action/Action';
import Command from './Components/Command/Command';

function App() {
  // add deployment type state here so it can be passed around to different components.
  const [selectedDeployment, setSelectedDeployment] = useState('Select Deployment');
  const [hasNamespace, setHasNamespace] = useState(false);
  const [namespace, setNamespace] = useState("");

  return (
    <div className="App">
      <h1>Command Line Generator</h1>
      <div className="actions">
        <Deployment
          selectedDeployment={selectedDeployment}
          setSelectedDeployment={setSelectedDeployment}
          hasNamespace={hasNamespace}
          setHasNamespace={setHasNamespace}
          namespace={namespace}
          setNamespace={setNamespace}
        />
        <Action
          selectedDeployment={selectedDeployment}
        />
      </div>
      <div>
        <Command />
      </div>
    </div>
  );
}

export default App;

// deployment component
// function component (will change based on deployment component)
// command component (copyable)

// ANCHOR External Modules 
import { useState } from 'react';

// ANCHOR Internal Modules
import { commands } from '../../utils/commands';
import { getOptionValues } from '../../utils/helpers';
import Description from './Description';

// ANCHOR CSS
import './Descriptions.css';



export default function Descriptions({ selectedDeployment, mode }) {
    const deploymentMap = commands[selectedDeployment];
    const mapKeys = getOptionValues(deploymentMap);
    const [currentInfoOpen, setCurrentInfoOpen] = useState("Function");
    const len = mapKeys.length;

    const generateDescriptions = () => {
        return mapKeys.map((mapKey, i) => {
            const vals = deploymentMap[mapKey];
            return (
                <Description
                    key={`desc-${i}`}
                    func={mapKeys[i]}
                    info={vals}
                    currentInfoOpen={currentInfoOpen}
                    setCurrentInfoOpen={setCurrentInfoOpen}
                    mode={mode}
                />
            )
        })
    }

    return (
        <div>
            <h4 className={`section ${mode === 'dark' ? 'dark' : 'light'}`}>Descriptions &nbsp;
                {len !== 0 &&
                    <span className="instruction">
                        - &nbsp;click to expand
                    </span>
                }

            </h4>
            {len !== 0 ? (
                <div className="desc-list">
                    {generateDescriptions()}
                </div>
            ) : (
                <div className={`desc-list placeholder ${mode === 'dark' ? 'dark' : 'light'}`}>
                    <p>Choose Deployment to list function descriptions.</p>
                </div>
            )}
        </div>
    )
}
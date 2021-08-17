import { useState } from 'react';
import {commands} from '../../utils/commands';
import { getOptionValues } from '../../utils/helpers';
import Description from './Description';

import './Descriptions.css';

export default function Descriptions({selectedDeployment}) {
    const deploymentMap = commands[selectedDeployment];
    const mapKeys = getOptionValues(deploymentMap);
    // const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [currentInfoOpen, setCurrentInfoOpen] = useState("Function");

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
                />
            )
        })
    }

    return (
        <div>
            <h4>Descriptions</h4>
            {mapKeys ? (
                <ul className="desc-list">
                    {generateDescriptions()}
                </ul>
            ) : (
                <div>
                    Choose Deployment to get descriptions.
                </div>
            )}
        </div>
    )
}
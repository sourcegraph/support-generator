import React, {useState} from 'react';

import './Deployment.css';

export default function Deployment(props) {
    const [selected, setSelected] = useState('Select Deployment');

    return (
        <div>
            {/* dropdown with options
                on update, based on the option selected, 
                the namespace checkbox should appear, 
                or not appear.

                Also... the Action dropdown should appear, once
                any option is selected.
            */}
            <select 
                onChange={(e) => {
                    setSelected(e.target.value)
                }} 
                defaultValue={selected}
                value={selected}
            >
                <option value="Select Deployment">Select Deployment</option>
                <option value="Single Docker">Single Docker</option>
                <option value="Docker Compose">Docker Compose</option>
                <option value="Kubernetes">Kubernetes</option>
            </select>
        </div>
    )
}
import { useEffect, useState } from 'react';
import './Descriptions.css';

export default function Description({key, func, info, currentInfoOpen, setCurrentInfoOpen}) {
    const [showInfoOption, setShowInfoOption] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);

    const handleExpand = () => {
        if (currentInfoOpen !== func) {
            setCurrentInfoOpen(func);
        } else {
            setCurrentInfoOpen("Function")
        }
        
    }

    useEffect(() => {
        console.log(currentInfoOpen);
    }, [currentInfoOpen])

    return (
        <>
            {func !== "Function" &&
                <li 
                    key={key}
                    className="desc-item"
                    onMouseEnter={() => setShowInfoOption(true)}
                    onMouseLeave={() => setShowInfoOption(false)}
                >
                    <div className="row">
                        <div>
                            {func}
                        </div>
                        {showInfoOption && 
                            <button
                                className="expand"
                                onClick={handleExpand}
                            >
                                i {`<`}
                            </button>
                        }
                    </div>
                    {currentInfoOpen === func && 
                        <div className="command-info">
                            <ul className="description">
                                <li>
                                    <span className="info-key">Description:&nbsp;</span>{info.description}
                                </li>
                            </ul>
                        </div>
                    }
                </li>
            }
        </>

    )
}